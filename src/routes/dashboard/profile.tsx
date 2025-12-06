import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-10">
      <h1 className="text-4xl font-bold mb-6">Profile Siswa</h1>
      <p>Nama: Farrel</p>
      <p>Kelas: 12 RPL</p>
      <p>Status: ON FIRE BELAJAR TANSTACK ROUTER</p>
    </div>
  );
}
