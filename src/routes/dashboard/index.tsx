import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-10">
      <h1 className="text-5xl font-bold mb-6">Welcome back, Farrel!</h1>
      <p className="text-2xl text-gray-600">
        Ini dashboard utama. Sidebar kiri udah aktif!
      </p>
    </div>
  );
}
