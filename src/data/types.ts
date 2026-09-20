import type { OrganizationKey } from './organizations';
export interface Media {
  src: string;
  alt: string;
  caption: string;
  fit?: 'cover' | 'contain';
  position?: string;
  layout?: 'wide';
  presentation?: 'horizontal';
  scale?: number;
}
export interface Entry {
  id: string;
  title: string;
  shortTitle: string;
  organization: string;
  logo?: OrganizationKey;
  period: string;
  role: string;
  category: string;
  summary: string;
  cover: Media;
  preview?: Media;
  previewLogo?: boolean;
  pending?: { title: string; prompt: string };
  status?: string;
  stats?: { value: string; label: string }[];
  sections: { title: string; text?: string; points?: string[] }[];
  note?: { title: string; text: string };
  timeline?: { date: string; title: string; text: string }[];
  gallery?: Media[];
  galleryColumns?: 2 | 3;
  video?: { src: string; poster: string; caption: string };
  links?: { label: string; href: string }[];
}
