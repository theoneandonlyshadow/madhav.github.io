import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { GITHUB_USERNAME } from "@/config/site";

type GitHubContributionsResponsePrimary = {
  contributions: Activity[];
};

function getLast365Days(contributions: Activity[]) {
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 364);

  const filtered = contributions
    .filter((activity) => {
      const activityDate = new Date(activity.date);
      return activityDate >= startDate && activityDate <= today;
    })
    .slice(-365);

  return filtered.length > 0 ? filtered : contributions.slice(-365);
}

export async function getGitHubContributions() {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
    {
      next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
    }
  );
  const data = (await res.json()) as GitHubContributionsResponsePrimary;
  return getLast365Days(data.contributions);
}
