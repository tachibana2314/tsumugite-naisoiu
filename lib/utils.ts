import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Image optimization helper
export function getOptimizedImageUrl(src: string, width = 800): string {
  // For local images, we can't do much in static export mode
  // But this function can be extended for CDN optimization if needed
  return src;
}

// Lazy loading helper
export function shouldPrioritize(index: number): boolean {
  // Only prioritize the first few images
  return index < 2;
}