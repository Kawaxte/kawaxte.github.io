import type { JSX } from "preact";

interface FooterContentProps {
  author?: string;
  children?: JSX.Element | JSX.Element[];
}

export function FooterContent(
  { author = "Krystian", children }: FooterContentProps,
): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <div class="container mx-auto flex flex-col items-center">
      <div class="flex justify-center space-x-4 mb-2">
        <a
          href="https://www.facebook.com/profile.php?id=100017243020873"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-icon ml-4 w-10 h-10 flex items-center justify-center"
        >
          <i class="fab fa-facebook fa-lg"></i>
        </a>
        <a
          href="https://github.com/krysyxte"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-icon ml-4 w-10 h-10 flex items-center justify-center"
        >
          <i class="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://steamcommunity.com/id/kawaxte"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-icon ml-4 w-10 h-10 flex items-center justify-center"
        >
          <i class="fab fa-steam fa-lg"></i>
        </a>
        <a
          href="https://youtube.com/@krysyxte303"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-icon ml-4 w-10 h-10 flex items-center justify-center"
        >
          <i class="fab fa-youtube fa-lg"></i>
        </a>
      </div>
      <div class="text-center">
        &copy; {year} {author}
      </div>
      {children}
    </div>
  );
}
