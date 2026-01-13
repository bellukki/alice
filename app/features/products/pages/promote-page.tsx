import type { Route } from "./+types/promote-page";
import type { MetaFunction } from "react-router";

export function meta({}: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: "Promote Product | Alice" },
    { name: "description", content: "Promote your product" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function PromotePage({}: Route.ComponentProps) {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">Promote Product</h1>
    </div>
  );
}
