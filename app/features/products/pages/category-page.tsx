import { Form } from "react-router";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";
import type { Route } from "./+types/category-page";

export const meta: Route.MetaFunction = ({ params }) => {
  return [
    { title: `Development Tools | Alice` },
    { name: "description", content: `Products in Development Tools category` },
  ];
};

export default function CategoryPage() {
  return (
    <div className="space-y-10">
      <Hero
        title={"Development Tools"}
        subtitle="{`Tools for developers to build their products faster`}"
      />

      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            productId={`product-${index}`}
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={12}
            upvotesCount={120}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}
