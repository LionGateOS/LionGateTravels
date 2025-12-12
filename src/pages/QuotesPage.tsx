import React from "react";
import { store } from "../data/store";

export function QuotesPage() {
  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Quotes</h1>
        {store.quotes.map(q => (
          <div key={q.reference}>{q.reference} — {q.traveller}</div>
        ))}
      </section>
    </main>
  );
}
