import type { Route } from "./+types/team-page";
import type { MetaFunction } from "react-router";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: `Team ${params.teamId} | Alice` },
    { name: "description", content: `View team ${params.teamId}` },
  ];
}

export default function TeamPage({ params }: Route.ComponentProps) {
  return <div>Team Page: {params.teamId}</div>;
}
