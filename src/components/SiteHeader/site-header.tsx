import { Link } from "@tanstack/react-router";

export default function SiteHeader() {
  return (
    <nav className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex gap-10 text-lg font-semibold">
        <Link
          to="/"
          className="hover:opacity-80 transition"
          activeProps={{ className: "underline underline-offset-4 font-bold" }}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:opacity-80 transition"
          activeProps={{ className: "underline underline-offset-4 font-bold" }}
        >
          About
        </Link>
        <Link
          to="/dashboard"
          className="hover:opacity-80 transition"
          activeProps={{ className: "underline underline-offset-4 font-bold" }}
        >
          Dashboard
        </Link>
        <Link
          to="/login"
          className="hover:opacity-80 transition"
          activeProps={{ className: "underline underline-offset-4 font-bold" }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
