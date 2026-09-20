import type { KubernetesNamespace } from './types';
import { loadOpenShiftNamespaces } from './utils';

/**
 * Returns the OpenShift namespaces read from the mocked namespace list response.
 *
 * @returns The namespaces from `src/http/openshift_namespaces.json`.
 *
 * @throws {Error} If the response file cannot be read or parsed.
 */
export async function getOpenShiftNamespaces(): Promise<KubernetesNamespace[]> {
  return loadOpenShiftNamespaces();
}
