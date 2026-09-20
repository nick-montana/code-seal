import cron, { type ScheduledTask } from 'node-cron';

import { runLoadJobs } from './src/load_jobs';

/**
 * Starts the application: runs the load jobs on a cron schedule.
 *
 * @param cronExpression - Cron expression for the schedule. Defaults to the `LOAD_JOBS_CRON` environment variable.
 * @returns The running scheduled task; call `stop()` on it to shut the schedule down.
 *
 * @throws {Error} If no cron expression is provided or it is not a valid cron expression.
 *
 * @example
 * ```typescript
 * // LOAD_JOBS_CRON="*\/15 * * * *"
 * const task = runApplication();
 * ```
 */
export function runApplication(cronExpression: string | undefined = process.env.LOAD_JOBS_CRON): ScheduledTask {
  if (!cronExpression) {
    throw new Error('LOAD_JOBS_CRON is not set; provide a cron expression such as "*/15 * * * *"');
  }
  if (!cron.validate(cronExpression)) {
    throw new Error(`LOAD_JOBS_CRON is not a valid cron expression: "${cronExpression}"`);
  }

  // noOverlap: skip a tick if the previous run of the load jobs is still going.
  const task = cron.schedule(cronExpression, () => runLoadJobs(), { name: 'load-jobs', noOverlap: true });
  console.log(`[app] load jobs scheduled: "${cronExpression}"`);

  return task;
}

if (require.main === module) {
  runApplication();
}
