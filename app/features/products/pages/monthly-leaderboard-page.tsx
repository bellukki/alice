import type { Route } from "./+types/monthly-leaderboard-page";
import type { MetaFunction } from "react-router";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: `Monthly Leaderboard ${params.year}/${params.month} | Alice` },
    {
      name: "description",
      content: `Product leaderboard for ${params.year}/${params.month}`,
    },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    month: params.month,
  };
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function MonthlyLeaderboardsPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">
        Monthly Leaderboard {loaderData.year}/{loaderData.month}
      </h1>
    </div>
  );
}
