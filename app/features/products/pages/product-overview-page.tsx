import { ChevronUpIcon, Link, StarIcon } from "lucide-react";
import type { Route } from "./+types/product-overview-page";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: `Product ${params.productId} | Alice` },
    {
      name: "description",
      content: `Overview for product ${params.productId}`,
    },
  ];
}

export default function ProductOverviewPage({
  params: { productId },
}: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <div className="space-y-1">
        <h3 className="text-lg font-bold">What is this product?</h3>
        <p className="text-muted-foreground">
          This product is a tool that helps you create beautiful websites.
        </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-bold">How does it work?</h3>
        <p className="text-muted-foreground">
          This product is a tool that helps you create beautiful websites.
        </p>
      </div>
    </div>
  );
}
