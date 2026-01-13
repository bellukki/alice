import type { Route } from "./+types/search-page";
import type { MetaFunction } from "react-router";

export function meta({}: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: "Search Products | Alice" },
    { name: "description", content: "Search for products" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";
  return {
    query,
  };
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">Search Products</h1>
      {loaderData.query && (
        <p className="text-xl mt-4">Searching for: {loaderData.query}</p>
      )}
    </div>
  );
}
