import type { Route } from "./+types/submit-post-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Post | Alice" },
    { name: "description", content: "Submit a new discussion post" },
  ];
};

export default function SubmitPostPage({}: Route.ComponentProps) {
  return <div>Submit Post Page</div>;
}
