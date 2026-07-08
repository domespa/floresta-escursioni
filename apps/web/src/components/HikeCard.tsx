import type { Hike } from "@floresta/types";

interface HikeCardProps {
  hike: Hike;
}

export default function HikeCard({ hike }: HikeCardProps) {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}
    >
      <h3>{hike.title}</h3>
      <p>{hike.description}</p>
      <p>Difficoltà: {hike.difficulty}</p>
      <p>
        Durata: {hike.durationHours}h — Prezzo: €{hike.price}
      </p>
    </div>
  );
}
