import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { GITHUB_USERNAME_COMPANY } from "@/config/site";

type GitHubContributionsResponseCompany = {
  contributions: Activity[];
};

export async function getGitHubContributionsCompany() {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME_COMPANY}?y=last`,
    {
      next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
    }
  );
  const data = (await res.json()) as GitHubContributionsResponseCompany;
  return data.contributions;
}
