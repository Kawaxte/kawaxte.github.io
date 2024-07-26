export function $(selector: string, context?: HTMLElement): HTMLElement | null {
  return (context || document).querySelector(selector);
}

export function $$(selector: string): NodeListOf<HTMLElement> {
  return document.querySelectorAll(selector);
}

export function onDOMContentLoaded(callback: () => void): void {
  document.addEventListener("DOMContentLoaded", callback);
}
