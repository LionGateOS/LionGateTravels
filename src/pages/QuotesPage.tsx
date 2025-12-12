import React from "react";

const quotes = [
  { reference: "Q-2048", traveller: "L. Rossi", destination: "Rome", value: "€2,150", status: "Waiting reply" },
  { reference: "Q-2052", traveller: "Chen family", destination: "Tokyo", value: "¥640,000", status: "Draft" }
];

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
          {quotes.map((quote) => (
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
