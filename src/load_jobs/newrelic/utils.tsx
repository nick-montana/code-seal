import { readFile } from 'node:fs/promises';
import path from 'node:path';

import type { NewRelicEntity, NewRelicEntitySearchResponse } from './types';

const ENTITIES_RESPONSE_PATH = path.resolve(
  __dirname,
  '../../http/newrelic_entities_graphql_response.json',
);

/**
 * Reads the mocked New Relic entity search GraphQL response from disk.
 *
 * The response is a GraphQL envelope (`data.actor.entitySearch.results`); only
 * the `entities` array is returned.
 *
 * @returns The entities from `src/http/newrelic_entities_graphql_response.json`.
 *
 * @throws {Error} If the file cannot be read, is not valid JSON, or has no `entities` array.
 */
export async function loadNewRelicEntities(): Promise<NewRelicEntity[]> {
  const raw = await readFile(ENTITIES_RESPONSE_PATH, 'utf-8');
  const response: NewRelicEntitySearchResponse = JSON.parse(raw);
  const entities = response.data?.actor?.entitySearch?.results?.entities;

  if (!Array.isArray(entities)) {
    throw new Error(`Expected "data.actor.entitySearch.results.entities" array in ${ENTITIES_RESPONSE_PATH}`);
  }

  return entities;
}
