import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/teams-page";
import { TeamCard } from "../components/team-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Teams | Alice" },
    { name: "description", content: "Find a teammate" },
  ];
};

export default function TeamsPage({}: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero
        title="Teams"
        subtitle="Find a teammate to build your next big idea"
      />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <TeamCard
            key={`teamId-${index}`}
            id={`teamId-${index}`}
            leaderUsername="bellukki"
            leaderAvatarImage="https://github.com/bellukki.png"
            positions={[
              "React Developer",
              "Node.js Developer",
              "Product Manager",
            ]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}
