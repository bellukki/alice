import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/otp-start-page";
import { Form, Link } from "react-router";
import InputPair from "~/common/components/input-pair";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "OTP Start | Alice" },
    { name: "description", content: "Start OTP verification" },
  ];
};

export default function OtpStartPage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <div className="flex items-center flex-col justify-center w-full max-w-md gap-10">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Login with OTP</h1>
          <p className="text-sm text-muted-foreground">
            We will send a 4-digit code to log in to your email address.
          </p>
        </div>
        <Form className="w-full space-y-4">
          <InputPair
            id="email"
            label="Email"
            description="Enter your email address"
            name="email"
            required
            type="email"
            placeholder="i.e alice@example.com"
          />
          <Button type="submit" className="w-full">
            Send OTP
          </Button>
        </Form>
      </div>
    </div>
  );
}
