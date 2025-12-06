import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-12">
      <h1 className="text-5xl font-bold mb-6">About Farrel</h1>
      <p className="text-xl leading-relaxed">
        Aku siswa SMK yang gila belajar fullstack.
        <br />
        Target sebelum lulus: punya 10 project keren, bisa Go + React + TanStack
        Router + deploy sendiri.
        <br />
        <span className="text-purple-600 font-bold">Status: ON FIRE</span>
      </p>
    </div>
  );
}
