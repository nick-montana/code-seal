import type { GitHubRepository } from './types';
import { loadGitHubOrgAlphaRepos, loadGitHubOrgBetaRepos } from './utils';

/**
 * Returns the GitHub repositories for the alpha org, read from the mocked response.
 *
 * @returns The repositories from `src/http/github_org_alpha_repos_response.json`.
 *
 * @throws {Error} If the response file cannot be read or parsed.
 */
export async function getGitHubOrgAlphaRepos(): Promise<GitHubRepository[]> {
  return loadGitHubOrgAlphaRepos();
}

/**
 * Returns the GitHub repositories for the beta org, read from the mocked response.
 *
 * @returns The repositories from `src/http/github_org_beta_repos_response.json`.
 *
 * @throws {Error} If the response file cannot be read or parsed.
 */
export async function getGitHubOrgBetaRepos(): Promise<GitHubRepository[]> {
  return loadGitHubOrgBetaRepos();
}
