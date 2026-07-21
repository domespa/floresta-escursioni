import type { Hike } from "@floresta/types";

// Titoli, prezzi ("a partire da"), durata, difficoltà, descrizioni e link di
// prenotazione presi dalle pagine reali di ogni escursione su Understory
// (florestaescursioni.understory.io). Le immagini sono verificate e reali
// solo per le Tholos: per le altre 6 escursioni gli URL ricostruiti dalla
// pagina non erano validi (404/403), quindi restano placeholder picsum.photos
// in attesa delle foto vere.
export const hikes: Hike[] = [
  {
    id: "1",
    slug: "escursione-tholos",
    title: "Escursione delle Tholos",
    shortDescription: "Passeggiata guidata alle antiche Tholos in pietra a secco, con picnic panoramico.",
    description:
      "Le Tholos sono antiche costruzioni in pietra a secco che servivano a contadini e allevatori come rifugio nei mesi estivi. L'escursione attraversa boschi e sterrati fino a un punto panoramico con vista sull'Etna da un lato e sulle Isole Eolie dall'altro, con picnic incluso.",
    difficulty: "facile",
    mode: "quad",
    durationHours: 1,
    price: 60,
    images: [
      "https://media.understory.io/experience/fb1be7ea3fdfb8fdd4bc45d90e1e3949/cover/yvDT60Kpj3PS.false",
      "https://media.understory.io/experience/fb1be7ea3fdfb8fdd4bc45d90e1e3949/cover/GoAYNxSDnxL-.false",
    ],
    location: "Floresta (ME)",
    category: "Tholos",
    featured: true,
    bookingUrl: "https://florestaescursioni.it/experience/fb1be7ea3fdfb8fdd4bc45d90e1e3949",
  },
  {
    id: "2",
    slug: "escursione-tholos-trekking-mtb",
    title: "Escursione delle Tholos (Trekking o Mountain Bike)",
    shortDescription: "Stesso percorso delle Tholos, da fare in autonomia a piedi o in mountain bike.",
    description:
      "Le Tholos sono antiche costruzioni in pietra a secco che servivano a contadini e allevatori come rifugio nei mesi estivi. Versione in autonomia (mountain bike inclusa nel prezzo) dello stesso percorso tra boschi e sterrati, fino al punto panoramico con vista su Etna e Isole Eolie, con picnic.",
    difficulty: "facile",
    mode: "trekking-mtb",
    durationHours: 3,
    price: 20,
    images: [
      "https://media.understory.io/experience/fb1be7ea3fdfb8fdd4bc45d90e1e3949/cover/ueGULi4UsxoS.false",
      "https://media.understory.io/experience/fb1be7ea3fdfb8fdd4bc45d90e1e3949/cover/TKBMuemrhxEN.false",
    ],
    location: "Floresta (ME)",
    category: "Tholos",
    bookingUrl: "https://florestaescursioni.it/experience/bc54a31631e4b9dc1eb31951f53578da",
  },
  {
    id: "3",
    slug: "fonte-alcantara",
    title: "Escursione alla fonte del fiume Alcantara e dintorni",
    shortDescription: "Escursione guidata in quad fino alla sorgente del fiume Alcantara, a 1.360m di quota.",
    description:
      "Un percorso guidato in quad che attraversa faggete, castagneti, torrenti e aceri secolari fino a raggiungere i 1.360 metri di quota da cui si osserva la sorgente del fiume Alcantara, tra panorami sulle Isole Eolie e sull'Etna. Dislivello di circa 900 metri, con picnic finale affacciato su Floresta.",
    difficulty: "media",
    mode: "quad",
    durationHours: 2.5,
    price: 120,
    images: ["https://picsum.photos/seed/alcantara-fonte-1/1200/800", "https://picsum.photos/seed/alcantara-fonte-2/1200/800"],
    location: "Alcantara (ME)",
    category: "Alcantara",
    featured: true,
    bookingUrl: "https://florestaescursioni.it/experience/6acd81cf74c4e8c68096c3cbe2843679",
  },
  {
    id: "4",
    slug: "fonte-alcantara-trekking-mtb",
    title: "Escursione alla fonte del fiume Alcantara e dintorni (Trekking o Mountain Bike)",
    shortDescription: "Stesso percorso alla sorgente dell'Alcantara, in autonomia a piedi o in mountain bike.",
    description:
      "Versione in autonomia (mountain bike inclusa) del percorso che attraversa faggete, castagneti, torrenti e aceri secolari fino alla sorgente del fiume Alcantara a 1.360 metri di quota, con vista su Isole Eolie ed Etna e picnic finale affacciato su Floresta.",
    difficulty: "media",
    mode: "trekking-mtb",
    durationHours: 2,
    price: 35,
    images: ["https://picsum.photos/seed/alcantara-fonte-mtb-1/1200/800", "https://picsum.photos/seed/alcantara-fonte-mtb-2/1200/800"],
    location: "Alcantara (ME)",
    category: "Alcantara",
    bookingUrl: "https://florestaescursioni.it/experience/3b9ac5b03b35622516a10ecb58d28e40",
  },
  {
    id: "5",
    slug: "escursione-laghi",
    title: "Escursione LAGHI",
    shortDescription: "Escursione guidata in quad lungo la dorsale dei Nebrodi tra Floresta e Mistretta.",
    description:
      "Un percorso guidato in quad lungo la dorsale dei Nebrodi che collega Floresta a Mistretta, attraverso torrenti e boschi, con panorami sulle Isole Eolie, sui laghi e sull'Etna. Picnic incluso dopo 3 ore e mezza di escursione, prima del rientro al campo base.",
    difficulty: "difficile",
    mode: "quad",
    durationHours: 3.5,
    price: 170,
    images: ["https://picsum.photos/seed/laghi-1/1200/800", "https://picsum.photos/seed/laghi-2/1200/800"],
    location: "Nebrodi (ME)",
    category: "Laghi",
    featured: true,
    bookingUrl: "https://florestaescursioni.it/experience/01d12c72a27136b840614a61269e2fa0",
  },
  {
    id: "6",
    slug: "escursione-laghi-trekking-mtb",
    title: "Escursione LAGHI (Trekking o Mountain Bike)",
    shortDescription: "Stesso percorso sulla dorsale dei Nebrodi, in autonomia a piedi o in mountain bike.",
    description:
      "Versione in autonomia (mountain bike inclusa) del percorso lungo la dorsale dei Nebrodi tra Floresta e Mistretta, attraverso torrenti e boschi con vista su Isole Eolie, laghi ed Etna. Giornata intera (9:00-16:00), con picnic dopo circa 3 ore e mezza.",
    difficulty: "difficile",
    mode: "trekking-mtb",
    durationHours: 7,
    price: 170,
    images: ["https://picsum.photos/seed/laghi-mtb-1/1200/800", "https://picsum.photos/seed/laghi-mtb-2/1200/800"],
    location: "Nebrodi (ME)",
    category: "Laghi",
    bookingUrl: "https://florestaescursioni.it/experience/e9c4bb40cf13fa62ff12a04363733721",
  },
  {
    id: "7",
    slug: "escursione-megaliti",
    title: "Escursione delle MEGALITI",
    shortDescription: "Escursione guidata in quad al sito naturalistico e archeologico dei Megaliti.",
    description:
      "Un percorso guidato in quad su sterrati tra boschi e fiumi fino all'affascinante sito naturalistico e archeologico dei Megaliti, in provincia di Messina. A scelta, degustazione di vino al tramonto oppure picnic diurno tra i panorami del sito.",
    difficulty: "difficile",
    mode: "quad",
    durationHours: 3.5,
    price: 170,
    images: ["https://picsum.photos/seed/megaliti-1/1200/800", "https://picsum.photos/seed/megaliti-2/1200/800"],
    location: "Novara di Sicilia (ME)",
    category: "Megaliti",
    featured: true,
    bookingUrl: "https://florestaescursioni.it/experience/825678a4662bce81ee69ec717e371829",
  },
  {
    id: "8",
    slug: "escursione-megaliti-trekking-mtb",
    title: "Escursione delle MEGALITI (Trekking o Mountain Bike)",
    shortDescription: "Stesso percorso ai Megaliti, in autonomia a piedi o in mountain bike.",
    description:
      "Versione in autonomia (mountain bike inclusa) del percorso su sterrati tra boschi e fiumi fino al sito naturalistico e archeologico dei Megaliti. Giornata intera, con degustazione di vino al tramonto oppure picnic diurno a scelta.",
    difficulty: "difficile",
    mode: "trekking-mtb",
    durationHours: 3.5,
    price: 45,
    images: ["https://picsum.photos/seed/megaliti-mtb-1/1200/800", "https://picsum.photos/seed/megaliti-mtb-2/1200/800"],
    location: "Novara di Sicilia (ME)",
    category: "Megaliti",
    bookingUrl: "https://florestaescursioni.it/experience/03c366c8a3d13b26701a9274907015cc",
  },
  {
    id: "9",
    slug: "boschi-e-fiumi",
    title: "Escursione boschi e fiumi",
    shortDescription: "Escursione guidata al Monte dell'Orso, tra faggi, castagni e agrifogli protetti.",
    description:
      "Un'escursione guidata verso il Monte dell'Orso, con vista sull'Etna, attraversando il torrente Fichera (affluente dell'Alcantara) tra boschi di faggio, castagno e agrifoglio, quest'ultimo specie protetta.",
    difficulty: "difficile",
    mode: "quad",
    durationHours: 1.5,
    price: 90,
    images: ["https://picsum.photos/seed/boschi-fiumi-1/1200/800", "https://picsum.photos/seed/boschi-fiumi-2/1200/800"],
    location: "Nebrodi (ME)",
    category: "Boschi e Fiumi",
    bookingUrl: "https://florestaescursioni.it/experience/a3b10cb8e20488b8f10f92e41d25a6b7",
  },
  {
    id: "10",
    slug: "boschi-e-fiumi-trekking-mtb",
    title: "Escursione boschi e fiumi (Trekking o Mountain Bike)",
    shortDescription: "Stesso percorso al Monte dell'Orso, in autonomia a piedi o in mountain bike.",
    description:
      "Versione in autonomia (mountain bike inclusa) dell'escursione verso il Monte dell'Orso, con vista sull'Etna, attraverso il torrente Fichera e boschi di faggio, castagno e agrifoglio protetto.",
    difficulty: "difficile",
    mode: "trekking-mtb",
    durationHours: 1.5,
    price: 35,
    images: ["https://picsum.photos/seed/boschi-fiumi-mtb-1/1200/800", "https://picsum.photos/seed/boschi-fiumi-mtb-2/1200/800"],
    location: "Nebrodi (ME)",
    category: "Boschi e Fiumi",
    bookingUrl: "https://florestaescursioni.it/experience/a3c972002191253e9075e09258d630b2",
  },
];

export function getHikeBySlug(slug: string): Hike | undefined {
  return hikes.find((hike) => hike.slug === slug);
}

export function getFeaturedHikes(): Hike[] {
  return hikes.filter((hike) => hike.featured);
}
