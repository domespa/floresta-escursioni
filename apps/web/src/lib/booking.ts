import type { Hike } from "@floresta/types";

// Unico punto di verità per il link di prenotazione di ogni escursione.
// Oggi rimanda a Understory; quando la prenotazione sarà gestita internamente
// basterà cambiare questa funzione (es. `return \`/prenota/${hike.slug}\`;`)
// senza toccare nessun'altra pagina o componente.
export function getBookingHref(hike: Hike): string {
  return hike.bookingUrl;
}
