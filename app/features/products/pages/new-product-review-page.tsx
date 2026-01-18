import type { Route } from "./+types/new-product-review-page";
import type { MetaFunction } from "react-router";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: `New Review for Product ${params.productId} | Alice` },
    {
      name: "description",
      content: `Create a new review for product ${params.productId}`,
    },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    productId: params.productId,
  };
}

export function action({}: Route.ActionArgs) {
  return {};
}

export default function NewProductReviewPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="px-20">
      <h1 className="text-5xl font-bold">New Product Review</h1>
      <p className="text-xl mt-4">Product ID: {loaderData.productId}</p>
    </div>
  );
}
