"use client";

import { LoaderIcon } from "lucide-react";
import { use } from "react";

import type { Activity } from "@/components/kibo-ui/contribution-graph";

import ContributionSkyline from "../github-contribution-skyline";

export function GitHubContributionGraphCompany({
  contributions,
}: {
  contributions: Promise<Activity[]>;
}) {
  const data = use(contributions);

  return (
    <ContributionSkyline
      className="!rounded-none !border-0 !p-3 sm:!p-4"
      data={data}
      defaultView="3d"
      palette="github"
    />
  );
}

export function GitHubContributionCompanyFallback() {
  return (
    <div className="flex h-[420px] w-full items-center justify-center">
      <LoaderIcon className="animate-spin text-muted-foreground" />
    </div>
  );
}
