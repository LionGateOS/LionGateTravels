import React, { useState } from "react";
import { store } from "../data/store";

export const QuotesPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

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
            <div
              key={quote.id}
              className={
                "to-table-row to-table-row-clickable" +
                (quote.id === selectedId ? " to-table-row-selected" : "")
              }
              onClick={() => setSelectedId(quote.id)}
            >
              <span>{quote.reference}</span>
              <span>{quote.traveller}</span>
              <span>{quote.destination}</span>
              <span>{quote.value}</span>
              <span className="to-pill-slim">{quote.status}</span>
            </div>
          ))}
        </div>
        {selectedId && (
          <div className="to-selection-hint">
            Selected quote ID: <span>{selectedId}</span>
          </div>
        )}
      </section>
    </main>
  );
};
