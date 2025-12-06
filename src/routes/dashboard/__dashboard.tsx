import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/__dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR KIRI */}
      <aside className="w-64 bg-linear-to-b from-purple-700 to-blue-800 text-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-8">SMK Absen</h2>
          <nav className="space-y-4">
            <Link
              to="/dashboard"
              className="block py-3 px-4 rounded-lg hover:bg-white/20 transition"
              activeProps={{ className: "bg-white/30 font-bold" }}
            >
              Dashboard Home
            </Link>
            <Link
              to="/dashboard/profile"
              className="block py-3 px-4 rounded-lg hover:bg-white/20 transition"
              activeProps={{ className: "bg-white/30 font-bold" }}
            >
              Profile
            </Link>
            <Link
              to="/dashboard/absen"
              className="block py-3 px-4 rounded-lg hover:bg-white/20 transition"
              activeProps={{ className: "bg-white/30 font-bold" }}
            >
              Absen
            </Link>
          </nav>
        </div>
      </aside>

      {/* KONTEN UTAMA */}
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
}
