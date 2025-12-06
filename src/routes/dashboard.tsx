import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-12">
      <h1 className="text-5xl font-bold mb-6">Dashboard (nanti protected)</h1>
      <p className="text-xl">Besok kita bikin sidebar + auth di sini.</p>
    </div>
  );
}
