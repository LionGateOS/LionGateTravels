import React from "react";
import { store } from "../data/store";

export function TripsPage() {
  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Trips</h1>
        {store.trips.map(t => (
          <div key={t.traveller}>{t.traveller} — {t.destination}</div>
        ))}
      </section>
    </main>
  );
}
