import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Login Page</h1>
      <p className="text-center text-gray-600">
        Besok kita bikin form + JWT + protected route
      </p>
    </div>
  );
}
