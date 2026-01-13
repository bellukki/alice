import type { Route } from "./+types/submit-page";
import type { MetaFunction } from "react-router";

export function meta({}: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: "Submit Product | Alice" },
    { name: "description", content: "Submit a new product" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function SubmitPage({}: Route.ComponentProps) {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">Submit Product</h1>
    </div>
  );
}
