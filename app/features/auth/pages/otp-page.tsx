import type { Route } from "./+types/otp-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "OTP | Alice" },
    { name: "description", content: "OTP verification" },
  ];
};

export default function OtpPage({}: Route.ComponentProps) {
  return <div>OTP Page</div>;
}
