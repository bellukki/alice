import type { Route } from "./+types/submit-post-page";
import { Hero } from "~/common/components/hero";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Post | Alice" },
    { name: "description", content: "Submit a new discussion post" },
  ];
};

export default function SubmitPostPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Submit a Post"
        subtitle="Submit a new discussion post to the community"
      />
      <Form className="flex flex-col gap-10 max-w-screen-sm mx-auto">
        <InputPair
          label="Title"
          name="title"
          id="title"
          description="(40 characters or less)"
          required
          placeholder="i.e What is the productivity tool?"
        />
        <SelectPair
          label="Category"
          name="category"
          description="Select the category that best fits your discussion"
          placeholder="i.e Productivity, Technology, etc."
          required
          options={[
            { label: "Productivity", value: "productivity" },
            { label: "Technology", value: "technology" },
            { label: "Science", value: "science" },
            { label: "Art", value: "art" },
            { label: "Music", value: "music" },
            { label: "Sports", value: "sports" },
            { label: "Other", value: "other" },
          ]}
        />
        <InputPair
          label="Content"
          name="content"
          id="content"
          description="(1,000 characters or less)"
          required
          placeholder="i.e I'm looking for a productivity tool that can help me manage my time better."
          textArea
        />
        <Button className="mx-auto" type="submit">
          Create Discussion
        </Button>
      </Form>
    </div>
  );
}
