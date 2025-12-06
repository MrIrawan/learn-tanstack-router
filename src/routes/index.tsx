import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 mb-6">
        Halo Farrel! WELCOME TO THE FUTURE!
      </h1>
      <p className="text-2xl text-gray-700">
        TanStack Router udah jalan 100% di project lo.
      </p>
      <p className="text-xl text-gray-600 mt-4">
        Coba klik menu di atas → pindah halaman tanpa reload!
      </p>
    </div>
  );
}
