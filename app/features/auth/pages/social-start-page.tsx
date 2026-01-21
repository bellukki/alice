import type { Route } from "./+types/social-start-page";
import type { MetaFunction } from "react-router";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: `Social Login ${params.provider} | Alice` },
    {
      name: "description",
      content: `Start social login with ${params.provider}`,
    },
  ];
}

export default function SocialStartPage({
  params,
}: Route.ComponentProps) {
  return <div>Social Start Page: {params.provider}</div>;
}
