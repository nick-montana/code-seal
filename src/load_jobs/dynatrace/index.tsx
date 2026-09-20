import type { DynatraceEntityService } from './types';
import { loadDynatraceServiceEntities } from './utils';

/**
 * Returns the Dynatrace service entities read from the mocked HTTP response.
 *
 * @returns The service entities from `src/http/dynatrace_service_entities_response.json`.
 *
 * @throws {Error} If the response file cannot be read or parsed.
 */
export async function getDynatraceServiceEntities(): Promise<DynatraceEntityService[]> {
  return loadDynatraceServiceEntities();
}
