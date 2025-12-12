import React from "react";
import { store } from "../data/store";

export const Dashboard: React.FC = () => {
  const activeTrips = store.trips.length;
  const awaitingQuotes = store.quotes.filter(q => q.status.toLowerCase().includes("waiting")).length;
  const tasksToday = store.tasks.filter(t => t.due.toLowerCase().includes("today")).length;
  const travellingNow = store.trips.filter(t => t.status.toLowerCase().includes("confirmed")).length;

  const cards = [
    { label: "Active trips", value: activeTrips.toString() },
    { label: "Quotes awaiting reply", value: awaitingQuotes.toString() },
    { label: "Tasks due today", value: tasksToday.toString() },
    { label: "Clients travelling now", value: travellingNow.toString() }
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
