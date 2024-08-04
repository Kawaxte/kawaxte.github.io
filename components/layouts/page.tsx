import type { ComponentChildren, JSX } from "preact";
import Footer from "../partials/footer.tsx";
import Header from "../partials/header.tsx";

export default function Page(
  { children }: { children: ComponentChildren },
): JSX.Element {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
