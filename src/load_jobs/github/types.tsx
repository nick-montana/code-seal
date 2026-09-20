interface GitHubOwner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    type: "Organization" | "User";
    site_admin: boolean;
}

interface GitHubLicense {
    key: string;
    name: string;
    spdx_id: string;
}

interface GitHubRepoPermissions {
    admin: boolean;
    maintain: boolean;
    push: boolean;
    triage: boolean;
    pull: boolean;
}

export interface GitHubRepository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: GitHubOwner;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    homepage: string | null;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string | null;
    forks_count: number;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: GitHubLicense | null;
    visibility: "public" | "private" | "internal";
    default_branch: string;
    permissions: GitHubRepoPermissions;
    topics: string[];
    allow_squash_merge: boolean;
    allow_merge_commit: boolean;
    allow_rebase_merge: boolean;
    delete_branch_on_merge: boolean;
}