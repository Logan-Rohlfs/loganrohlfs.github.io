import type { ImageMetadata } from 'astro';
const images = import.meta.glob<{ default: ImageMetadata }>(
  '/images/**/*.{jpg,jpeg,png,webp}',
  { eager: true },
);
export function getSource(path: string): ImageMetadata {
  const image = images[`/images/${path}`];
  if (!image) throw new Error(`Missing portfolio image: ${path}`);
  return image.default;
}
