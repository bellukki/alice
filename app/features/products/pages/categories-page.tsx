import type { Route } from "./+types/categories-page";
import type { MetaFunction } from "react-router";

export function meta({}: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: "Categories | Alice" },
    { name: "description", content: "Browse products by category" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function CategoriesPage({}: Route.ComponentProps) {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">Categories</h1>
    </div>
  );
}
