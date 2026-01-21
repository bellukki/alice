import type { Route } from "./+types/social-complete-page";
import type { MetaFunction } from "react-router";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: `Social Login Complete ${params.provider} | Alice` },
    {
      name: "description",
      content: `Complete social login with ${params.provider}`,
    },
  ];
}

export default function SocialCompletePage({
  params,
}: Route.ComponentProps) {
  return <div>Social Complete Page: {params.provider}</div>;
}
