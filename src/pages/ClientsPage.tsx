import React from "react";
import { store } from "../data/store";

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
          {store.clients.map((client) => (
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
