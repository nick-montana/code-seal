import { readFile } from 'node:fs/promises';
import path from 'node:path';

import type { DynatraceEntityService } from './types';

const SERVICE_ENTITIES_RESPONSE_PATH = path.resolve(
  __dirname,
  '../../http/dynatrace_service_entities_response.json',
);

/**
 * Reads the mocked Dynatrace service entities response from disk.
 *
 * The response is an envelope (`totalCount`, `pageSize`, `entities`); only the
 * `entities` array is returned.
 *
 * @returns The entities from `src/http/dynatrace_service_entities_response.json`.
 *
 * @throws {Error} If the file cannot be read, is not valid JSON, or has no `entities` array.
 */
export async function loadDynatraceServiceEntities(): Promise<DynatraceEntityService[]> {
  const raw = await readFile(SERVICE_ENTITIES_RESPONSE_PATH, 'utf-8');
  const response: { entities?: unknown } = JSON.parse(raw);

  if (!Array.isArray(response.entities)) {
    throw new Error(`Expected an "entities" array in ${SERVICE_ENTITIES_RESPONSE_PATH}`);
  }

  return response.entities as DynatraceEntityService[];
}
