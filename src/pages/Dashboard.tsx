import React from "react";
import { store } from "../data/store";
export const Dashboard: React.FC = () => {
  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Today&apos;s cockpit</h1>
        <p className="to-muted">Create items using the New buttons in each section.</p>
        <div className="to-grid">
          <article className="to-card"><div className="to-card-value">{store.trips.length}</div><div className="to-card-label">Trips</div></article>
          <article className="to-card"><div className="to-card-value">{store.quotes.length}</div><div className="to-card-label">Quotes</div></article>
          <article className="to-card"><div className="to-card-value">{store.clients.length}</div><div className="to-card-label">Clients</div></article>
          <article className="to-card"><div className="to-card-value">{store.tasks.length}</div><div className="to-card-label">Tasks</div></article>
        </div>
      </section>
    </main>
  );
};
