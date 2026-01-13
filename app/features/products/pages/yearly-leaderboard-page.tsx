import type { Route } from "./+types/yearly-leaderboard-page";
import type { MetaFunction } from "react-router";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: `Yearly Leaderboard ${params.year} | Alice` },
    {
      name: "description",
      content: `Product leaderboard for year ${params.year}`,
    },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
  };
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function YearlyLeaderboardsPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">
        Yearly Leaderboard {loaderData.year}
      </h1>
    </div>
  );
}
