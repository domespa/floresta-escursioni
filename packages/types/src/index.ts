// ESCURSIONE
export interface Hike {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  difficulty: "facile" | "media" | "difficile";
  // Modalità di svolgimento: guidata in quad con accompagnatore, oppure in
  // autonomia a piedi (trekking) o in mountain bike.
  mode: "quad" | "trekking-mtb";
  durationHours: number;
  price: number;
  images: string[];
  location: string;
  category: string;
  featured?: boolean;
  // Link esterno alla prenotazione (oggi Understory). Quando la prenotazione
  // sarà gestita internamente, basterà cambiare getBookingHref() in
  // apps/web/src/lib/booking.ts senza toccare i dati o le pagine.
  bookingUrl: string;
}
