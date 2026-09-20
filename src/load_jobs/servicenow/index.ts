import type { CmdbCiService } from './types';
import { loadServiceNowCmdbServices } from './utils';

/**
 * Returns the ServiceNow CMDB services read from the mocked Table API response.
 *
 * @returns The services from `src/http/servicenow_cmdb_response.json`.
 *
 * @throws {Error} If the response file cannot be read or parsed.
 */
export async function getServiceNowCmdbServices(): Promise<CmdbCiService[]> {
  return loadServiceNowCmdbServices();
}
