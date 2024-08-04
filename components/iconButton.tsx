import type { JSX } from "preact";

interface IconButtonProps {
  onClick: () => void;
  icon: string;
  className?: string;
}

export function IconButton(
  { onClick, icon, className = "" }: IconButtonProps,
): JSX.Element {
  return (
    <button
      class={`btn-icon flex items-center justify-center ml-4 w-10 h-10 ${className}`}
      onClick={onClick}
    >
      <i class={`fas ${icon}`}></i>
    </button>
  );
}
