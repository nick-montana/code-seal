import { readFile } from 'node:fs/promises';
import path from 'node:path';

import type { KubernetesNamespace, NamespaceListResponse } from './types';

const NAMESPACES_RESPONSE_PATH = path.resolve(
  __dirname,
  '../../http/openshift_namespaces.json',
);

/**
 * Reads the mocked OpenShift namespace list response from disk.
 *
 * The response is a Kubernetes `NamespaceList` envelope; only the `items`
 * array is returned.
 *
 * @returns The namespaces from `src/http/openshift_namespaces.json`.
 *
 * @throws {Error} If the file cannot be read, is not valid JSON, or has no `items` array.
 */
export async function loadOpenShiftNamespaces(): Promise<KubernetesNamespace[]> {
  const raw = await readFile(NAMESPACES_RESPONSE_PATH, 'utf-8');
  const response: NamespaceListResponse = JSON.parse(raw);

  if (!Array.isArray(response.items)) {
    throw new Error(`Expected an "items" array in ${NAMESPACES_RESPONSE_PATH}`);
  }

  return response.items;
}
