import type { JSX } from "preact";

interface FormInputProps {
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  rows?: number;
}

export default function FormInput(
  { type, name, placeholder, required, rows }: FormInputProps,
): JSX.Element {
  return (
    <input
      class="w-full px-3 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-blue-600 focus:outline-none focus:ring"
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      rows={rows}
      style={type === "textarea"
        ? { resize: "vertical", minHeight: "6rem" }
        : {}}
    />
  );
}
