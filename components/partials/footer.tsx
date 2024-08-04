import type { JSX } from "preact";
import SocialLink from "../socialLink.tsx";

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=100017243020873",
    icon: "facebook",
  },
  { href: "https://github.com/krysyxte", icon: "github" },
  { href: "https://steamcommunity.com/id/kawaxte", icon: "steam" },
  { href: "https://youtube.com/@krysyxte303", icon: "youtube" },
];

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer class="bg-white dark:bg-gray-900 text-black dark:text-gray-50 p-4">
      <div class="container mx-auto flex flex-col items-center">
        <div class="flex justify-center space-x-4 mb-2">
          {socialLinks.map((link) => <SocialLink key={link.icon} {...link} />)}
        </div>
        <div class="text-center">
          &copy; {year} Krystian
        </div>
      </div>
    </footer>
  );
}
