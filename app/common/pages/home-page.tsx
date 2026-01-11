import { Button } from "../components/ui/button";

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Home</h1>
      <p className="text-lg">Welcome to the home page</p>
      <div className="flex gap-4">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </main>
  );
}
