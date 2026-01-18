import { Button } from "~/common/components/ui/button";
import { ReviewCard } from "../components/review-card";

export function meta() {
  return [
    { title: `Product Reviews | Alice` },
    { name: "description", content: `Read and write reviews for products` },
  ];
}

export default function ProductReviewsPage() {
  return (
    <div className="space-y-10 max-w-xl">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">10 Reviews</h2>
        <Button variant="secondary">Write a Review</Button>
      </div>
      <div className="space-y-20">
        {Array.from({ length: 10 }).map((_, index) => (
          <ReviewCard
          username="John Doe"
          handle="@username"
          avatarFallback="N"
          avatarUrl="https://github.com/bellukki.png"
          rating={5}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          postedAt="10 days ago"
        />
        ))}
      </div>
    </div>
  );
}
