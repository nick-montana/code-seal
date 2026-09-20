import { readFile } from 'node:fs/promises';
import path from 'node:path';

import type { GitHubRepository } from './types';

const ORG_ALPHA_REPOS_RESPONSE_PATH = path.resolve(
  __dirname,
  '../../http/github_org_alpha_repos_response.json',
);
const ORG_BETA_REPOS_RESPONSE_PATH = path.resolve(
  __dirname,
  '../../http/github_org_beta_repos_response.json',
);

/**
 * Reads a mocked GitHub "list organization repositories" response from disk.
 *
 * @param filePath - Absolute path to the JSON response file.
 * @returns The repositories in the response.
 *
 * @throws {Error} If the file cannot be read, is not valid JSON, or is not an array.
 */
async function readRepos(filePath: string): Promise<GitHubRepository[]> {
  const raw = await readFile(filePath, 'utf-8');
  const repos: unknown = JSON.parse(raw);

  if (!Array.isArray(repos)) {
    throw new Error(`Expected an array of repositories in ${filePath}`);
  }

  return repos as GitHubRepository[];
}

/**
 * Reads the mocked GitHub repositories response for the alpha org.
 *
 * @returns The repositories from `src/http/github_org_alpha_repos_response.json`.
 *
 * @throws {Error} If the file cannot be read, is not valid JSON, or is not an array.
 */
export async function loadGitHubOrgAlphaRepos(): Promise<GitHubRepository[]> {
  return readRepos(ORG_ALPHA_REPOS_RESPONSE_PATH);
}

/**
 * Reads the mocked GitHub repositories response for the beta org.
 *
 * @returns The repositories from `src/http/github_org_beta_repos_response.json`.
 *
 * @throws {Error} If the file cannot be read, is not valid JSON, or is not an array.
 */
export async function loadGitHubOrgBetaRepos(): Promise<GitHubRepository[]> {
  return readRepos(ORG_BETA_REPOS_RESPONSE_PATH);
}
