import React from "react";

const clients = [
  { name: "Ana & Marco Silva", segment: "Leisure · Europe", notes: "Anniversary trip specialists" },
  { name: "Brightline Consulting", segment: "Corporate", notes: "Prefers business hotels near city center" },
  { name: "Chen family", segment: "Leisure · Asia", notes: "School holidays only" }
];

export const ClientsPage: React.FC = () => {
  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Clients</h1>
        <p className="to-muted">
          A quick view of the travellers and accounts you look after the most.
        </p>
        <div className="to-table-card">
          <div className="to-table-header">
            <span>Name</span>
            <span>Segment</span>
            <span>Notes</span>
          </div>
          {clients.map((client) => (
            <div key={client.name} className="to-table-row">
              <span>{client.name}</span>
              <span>{client.segment}</span>
              <span>{client.notes}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
