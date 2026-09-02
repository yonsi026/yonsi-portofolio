import { createFileRoute, Outlet } from "@tanstack/react-router";
import { CartProvider } from "../lib/seblak-cart";

export const Route = createFileRoute("/seblak")({
  component: SeblakLayout,
});

function SeblakLayout() {
  return (
    <CartProvider>
      <div className="theme-seblak min-h-screen">
        <Outlet />
      </div>
    </CartProvider>
  );
}
