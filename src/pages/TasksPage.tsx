import React from "react";
import { store } from "../data/store";

export function TasksPage() {
  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Tasks</h1>
        {store.tasks.map(t => (
          <div key={t.title}>{t.title} — {t.due}</div>
        ))}
      </section>
    </main>
  );
}
