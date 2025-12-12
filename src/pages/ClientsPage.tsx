import React, { useState } from "react";
import { store } from "../data/store";

export const ClientsPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

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
            <div
              key={client.id}
              className={
                "to-table-row to-table-row-clickable" +
                (client.id === selectedId ? " to-table-row-selected" : "")
              }
              onClick={() => setSelectedId(client.id)}
            >
              <span>{client.name}</span>
              <span>{client.segment}</span>
              <span>{client.notes}</span>
            </div>
          ))}
        </div>
        {selectedId && (
          <div className="to-selection-hint">
            Selected client ID: <span>{selectedId}</span>
          </div>
        )}
      </section>
    </main>
  );
};
