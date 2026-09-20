import { readFile } from 'node:fs/promises';
import path from 'node:path';

import type { CmdbCiService, CmdbCiServiceListResponse } from './types';

const CMDB_RESPONSE_PATH = path.resolve(
  __dirname,
  '../../http/servicenow_cmdb_response.json',
);

/**
 * Reads the mocked ServiceNow CMDB service list response from disk.
 *
 * The response is a Table API envelope (`result`); only the `result` array is
 * returned.
 *
 * @returns The CMDB services from `src/http/servicenow_cmdb_response.json`.
 *
 * @throws {Error} If the file cannot be read, is not valid JSON, or has no `result` array.
 */
export async function loadServiceNowCmdbServices(): Promise<CmdbCiService[]> {
  const raw = await readFile(CMDB_RESPONSE_PATH, 'utf-8');
  const response: CmdbCiServiceListResponse = JSON.parse(raw);

  if (!Array.isArray(response.result)) {
    throw new Error(`Expected a "result" array in ${CMDB_RESPONSE_PATH}`);
  }

  return response.result;
}
