// ESCURSIONE
export interface Hike {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: "facile" | "media" | "difficile";
  durationHours: number;
  price: number;
  images: string[];
}
