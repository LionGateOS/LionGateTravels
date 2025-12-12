import React from "react";
import { store } from "../data/store";

export const QuotesPage: React.FC = () => {
  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Quotes</h1>
        <p className="to-muted">
          Recent travel proposals that may need updates, follow-up or confirmation.
        </p>
        <div className="to-table-card">
          <div className="to-table-header">
            <span>Ref</span>
            <span>Traveller</span>
            <span>Destination</span>
            <span>Value</span>
            <span>Status</span>
          </div>
          {store.quotes.map((quote) => (
            <div key={quote.reference} className="to-table-row">
              <span>{quote.reference}</span>
              <span>{quote.traveller}</span>
              <span>{quote.destination}</span>
              <span>{quote.value}</span>
              <span className="to-pill-slim">{quote.status}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
