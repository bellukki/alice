import type { Route } from "./+types/idea-page";
import type { MetaFunction } from "react-router";
import { Hero } from "~/common/components/hero";
import { IdeaCard } from "../components/idea-card";
import { DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";

export function meta({ params }: Route.MetaArgs): ReturnType<MetaFunction> {
  return [
    { title: `Idea ${params.ideaId} | Alice` },
    { name: "description", content: `View idea ${params.ideaId}` },
  ];
}

export default function IdeaPage() {
  return (
    <div>
      <Hero
        title={`Idea #1312312`}
        subtitle="View and interact with this idea"
      />
      <div className="max-w-screen-sm mx-auto flex flex-col items-center gap-10">
        <p className="italic text-center">
          "Ipsum lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          </p>
          <div className="flex items-center text-sm">
            <div className="flex items-center gap-1">
              <EyeIcon className="size-4" />
              <span>123</span>
            </div>
            <DotIcon className="size-4" />
            <span>12 hours ago</span>
            <DotIcon className="size-4" />
            <Button variant="outline">
              <HeartIcon className="size-4" />
              <span>12</span>
            </Button>
          </div>
          <Button size="lg">Claim Idea now &rarr;</Button>
      </div>
    </div>
  );
}
