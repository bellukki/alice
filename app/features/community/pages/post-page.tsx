import type { Route } from "./+types/post-page";
import type { MetaFunction } from "react-router";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: `Post ${params.postId} | Alice` },
    { name: "description", content: `View post ${params.postId}` },
  ];
}

export default function PostPage() {
  return <div>Post Page</div>;
}
