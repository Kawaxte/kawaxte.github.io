import type { ComponentChildren, JSX } from "preact";
import Footer from "../footer.tsx";
import Header from "../header.tsx";

export default function BaseLayout(
  { children }: { children: ComponentChildren },
): JSX.Element {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
