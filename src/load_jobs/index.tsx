import { getDynatraceServiceEntities } from './dynatrace';
import { getGitHubOrgAlphaRepos, getGitHubOrgBetaRepos } from './github';
import { getNewRelicEntities } from './newrelic';
import { getOpenShiftNamespaces } from './openshift';
import { getServiceNowCmdbServices } from './servicenow';

interface LoadJob {
  name: string;
  /** Runs the load and resolves to the number of records loaded. */
  run: () => Promise<number>;
}

export interface LoadJobResult {
  name: string;
  count?: number;
  error?: unknown;
}

/** Jobs run sequentially, in this order. */
const LOAD_JOBS: LoadJob[] = [
  {
    name: 'github',
    run: async () => (await getGitHubOrgAlphaRepos()).length + (await getGitHubOrgBetaRepos()).length,
  },
  { name: 'openshift', run: async () => (await getOpenShiftNamespaces()).length },
  { name: 'newrelic', run: async () => (await getNewRelicEntities()).length },
  { name: 'dynatrace', run: async () => (await getDynatraceServiceEntities()).length },
  { name: 'servicenow', run: async () => (await getServiceNowCmdbServices()).length },
];

/**
 * Runs every load job one at a time: github, openshift, newrelic, dynatrace, servicenow.
 *
 * A failing job is logged and recorded in the results, and the remaining jobs
 * still run, so one bad source does not block the others.
 *
 * @returns One result per job, in run order, with either a record `count` or an `error`.
 */
export async function runLoadJobs(): Promise<LoadJobResult[]> {
  const results: LoadJobResult[] = [];

  for (const job of LOAD_JOBS) {
    try {
      const count = await job.run();
      console.log(`[load-jobs] ${job.name}: loaded ${count} records`);
      results.push({ name: job.name, count });
    } catch (error) {
      console.error(`[load-jobs] ${job.name}: failed`, error);
      results.push({ name: job.name, error });
    }
  }

  return results;
}
