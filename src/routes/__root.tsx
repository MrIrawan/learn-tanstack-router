import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import SiteHeader from "../components/SiteHeader/site-header";

const RootLayout = () => (
  <>
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />

      <main className="max-w-7xl mx-auto p-6">
        <Outlet />
      </main>

      <TanStackRouterDevtools position="bottom-right" />
    </div>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
