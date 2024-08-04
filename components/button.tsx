import type { ComponentChildren, JSX } from "preact";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ComponentChildren;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps): JSX.Element {
  const baseStyles =
    "px-4 py-2 font-bold rounded-md focus:outline-none focus:shadow-outline";
  const variantStyles = {
    primary: "text-white bg-blue-600 hover:bg-blue-700",
    secondary:
      "text-blue-600 bg-white hover:bg-gray-100 border border-blue-600",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} class={buttonStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} class={buttonStyles} type={type}>
      {children}
    </button>
  );
}
