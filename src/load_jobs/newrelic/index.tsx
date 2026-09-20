import type { NewRelicEntity } from './types';
import { loadNewRelicEntities } from './utils';

/**
 * Returns the New Relic entities read from the mocked GraphQL response.
 *
 * @returns The entities from `src/http/newrelic_entities_graphql_response.json`.
 *
 * @throws {Error} If the response file cannot be read or parsed.
 */
export async function getNewRelicEntities(): Promise<NewRelicEntity[]> {
  return loadNewRelicEntities();
}
