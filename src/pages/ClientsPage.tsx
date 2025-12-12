import React from "react";
import { store } from "../data/store";

export function ClientsPage() {
  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Clients</h1>
        {store.clients.map(c => (
          <div key={c.name}>{c.name} — {c.segment}</div>
        ))}
      </section>
    </main>
  );
}
