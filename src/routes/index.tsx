import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="w-full pt-36 pb-16">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-4 items-center">
          <div className="w-fit ring-2 ring-indigo-600 bg-indigo-100 flex flex-row items-center justify-center py-1.5 px-6 rounded-xl">
            <p className="text-base font-semibold text-black">
              welcome to the part of my learning journey
            </p>
          </div>
          <h2 className="text-5xl font-bold max-w-4xl text-center leading-snug">
            my name is Farrel Irawan and i am learning TanStack Router
          </h2>
          <div className="w-fit flex flex-row justify-between items-center gap-4">
            <a href="/">
              <button className="flex flex-row items-center justify-center bg-indigo-600 px-6 py-2 rounded-xl ring-2 ring-indigo-600">
                <p className="text-base font-semibold text-white">
                  who is farrel
                </p>
              </button>
            </a>
            <a
              href="https://tanstack.com/router/latest/docs/framework/react/quick-start"
              target="_blank"
            >
              <button className="flex flex-row items-center justify-center bg-indigo-100 px-6 py-2 rounded-xl ring-2 ring-indigo-600">
                <p className="text-base font-semibold text-black">
                  see tanstack router docs
                </p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
