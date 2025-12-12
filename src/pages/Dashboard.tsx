import React from "react";
import { store } from "../data/store";

export const Dashboard: React.FC = () => {
  const cards = [
    { label: "Active trips", value: store.trips.length.toString() },
    {
      label: "Quotes awaiting reply",
      value: store.quotes.filter((q) =>
        q.status.toLowerCase().includes("waiting")
      ).length.toString()
    },
    {
      label: "Tasks due today",
      value: store.tasks
        .filter((t) => t.due.toLowerCase().includes("today"))
        .length.toString()
    },
    {
      label: "Clients travelling now",
      value: store.trips
        .filter((t) => t.status.toLowerCase().includes("confirmed"))
        .length.toString()
    }
  ];

  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Today&apos;s cockpit</h1>
        <p className="to-muted">
          A single place to see what needs your attention across all travellers,
          quotes and suppliers.
        </p>
        <div className="to-grid">
          {cards.map((card) => (
            <article key={card.label} className="to-card">
              <div className="to-card-value">{card.value}</div>
              <div className="to-card-label">{card.label}</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
