import type { JSX } from "preact";

export default function SocialLink(
  { href, icon }: { href: string; icon: string },
): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      class="btn-icon ml-4 w-10 h-10 flex items-center justify-center"
    >
      <i class={`fab fa-${icon} fa-lg`}></i>
    </a>
  );
}
