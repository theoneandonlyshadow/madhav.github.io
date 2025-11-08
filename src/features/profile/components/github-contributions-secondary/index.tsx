import { Suspense } from "react";

import { getGitHubContributionsCompany } from "../../data/github-contributions-company";
import { Panel } from "../panel";
import {
  GitHubContributionCompanyFallback,
  GitHubContributionGraphCompany,
} from "./graph";

export function GitHubContributionsCompany() {
  const contributions = getGitHubContributionsCompany();

  return (
    <Panel>
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionCompanyFallback />}>
        <GitHubContributionGraphCompany contributions={contributions} />
      </Suspense>
    </Panel>
  );
}
