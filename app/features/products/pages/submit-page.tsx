import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import { useState } from "react";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product | Alice" },
    { name: "description", content: "Submit a new product" },
  ];
};

export default function SubmitPage() {
  const [logo, setLogo] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setLogo(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <Hero
        title="Submit Product"
        subtitle="Submit a new product to the community"
      />
      <Form className="grid grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="space-y-5">
          <InputPair
            label="Name"
            description="The name of the product"
            id="name"
            name="name"
            required
            type="text"
            placeholder="Name of the product"
          />
          <InputPair
            label="Tagline"
            description="60 characters or less"
            id="tagline"
            name="tagline"
            maxLength={60}
            required
            type="text"
            placeholder="A concise description of the product"
          />
          <InputPair
            label="URL"
            description="The URL of the product"
            id="url"
            name="url"
            required
            type="url"
            placeholder="https://example.com"
          />
          <InputPair
            textArea
            label="Description"
            description="The description of the product"
            id="description"
            name="description"
            required
            type="textarea"
            placeholder="A detailed description of the product"
          />
          <SelectPair
            label="Category"
            description="The category of the product"
            name="category"
            required
            placeholder="Select a category"
            options={[
              { value: "1", label: "Category 1" },
              { value: "2", label: "Category 2" },
              { value: "3", label: "Category 3" },
              { value: "4", label: "Category 4" },
            ]}
          />
          <Button type="submit" className="w-full" size="lg">
            Submit
          </Button>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="size-40 rounded-xl shadow-xl overflow-hidden">
            {logo ? (
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>
          <Label className="flex flex-col gap-1 items-start">
            Logo
            <small className="text-muted-foreground">
              This is the logo of the product
            </small>
          </Label>
          <Input
            type="file"
            className="w-1/2"
            onChange={onChange}
            required
            name="logo"
          />
          <div className="flex flex-col text-xs">
            <span className="text-muted-foreground">
              Recommended size: 128x128px
            </span>
            <span className="text-muted-foreground">
              Allowed formats: PNG, JPEG, GIF
            </span>
            <span className="text-muted-foreground">Max file size: 1MB</span>
          </div>
        </div>
      </Form>
    </div>
  );
}
