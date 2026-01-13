import type { Route } from "./+types/weekly-leaderboard-page";
import type { MetaFunction } from "react-router";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: `Weekly Leaderboard ${params.year} Week ${params.week} | Alice` },
    {
      name: "description",
      content: `Product leaderboard for week ${params.week} of ${params.year}`,
    },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    week: params.week,
  };
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function WeeklyLeaderboardsPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">
        Weekly Leaderboard {loaderData.year} Week {loaderData.week}
      </h1>
    </div>
  );
}
