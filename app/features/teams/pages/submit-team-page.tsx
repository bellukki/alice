import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-team-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import SelectPair from "~/common/components/select-pair";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Create a Team | Alice" },
    { name: "description", content: "Submit a new team" },
  ];
};

export default function SubmitTeamPage({}: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero
        title="Create a Team"
        subtitle="Create a new team to build your next big idea"
      />
      <Form className="max-w-screen-2xl flex flex-col items-center gap-10 mx-auto">
        <div className="grid grid-cols-3 w-full gap-10">
          <InputPair
            label="What is the name of your product?"
            placeholder="i.e Social Media Platform for Dogs"
            description="(20 characters max)"
            name="name"
            maxLength={20}
            type="text"
            id="name"
            required
          />
          <SelectPair
            label="What is the stage of your product?"
            description="Select the stage of your product"
            name="stage"
            required
            placeholder="Select the stage of your product"
            options={[
              {
                value: "idea",
                label: "Idea",
              },
              {
                value: "prototype",
                label: "Prototype",
              },
              {
                value: "beta",
                label: "Beta",
              },
              {
                value: "launched",
                label: "Launched",
              },
            ]}
          />
          <InputPair
            label="What is the size of your team?"
            description="(max 5 members)"
            name="size"
            max={5}
            min={1}
            type="number"
            id="size"
            required
          />
          <InputPair
            label="How much equity are you willing to give?"
            description="(each)"
            name="equity"
            max={100}
            min={0}
            type="number"
            id="equity"
            required
          />
          <InputPair
            label="What roles are you looking for?"
            placeholder="React Developer, Node.js Developer, Product Manager"
            description="(comma separated list of roles)"
            name="roles"
            type="text"
            id="roles"
            required
          />
          <InputPair
            label="What is the description of your product?"
            description="(200 characters max)"
            placeholder="i.e We are building a new social media platform for dogs to connect with each other"
            name="description"
            type="text"
            id="description"
            maxLength={200}
            required
            textArea
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Create Team
        </Button>
      </Form>
    </div>
  );
}
