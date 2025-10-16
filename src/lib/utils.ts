// Import helpers for conditional class name handling and merging
import { clsx, type ClassValue } from "clsx";  // `clsx` allows conditional and dynamic class names
import { twMerge } from "tailwind-merge";      // `twMerge` intelligently merges Tailwind classes (handles duplicates, conflicts, etc.)

// Utility function to combine and clean up class names
export function cn(...inputs: ClassValue[]) {
  // `clsx(inputs)` merges conditional class names (like truthy/falsy values)
  // `twMerge()` ensures Tailwind CSS classes are properly merged and optimized
  return twMerge(clsx(inputs));
}

/*
Example usage:
cn("p-2", "text-center", condition && "bg-blue-500")
→ outputs "p-2 text-center bg-blue-500" (only if condition is true)

cn("p-2", "p-4")
→ outputs "p-4" (because twMerge keeps the latest valid Tailwind class)
*/
