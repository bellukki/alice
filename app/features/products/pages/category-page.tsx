import type { Route } from "./+types/category-page";
import type { MetaFunction } from "react-router";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: `${params.category} | Alice` },
    { name: "description", content: `Products in ${params.category} category` },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    category: params.category,
  };
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">Category: {loaderData.category}</h1>
    </div>
  );
}
