import React, { useMemo, useState } from "react";
import { store } from "../data/store";
import { DetailDrawer } from "../components/DetailDrawer";

export const ClientsPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = useMemo(() => {
    if (!selectedId) return null;
    return store.clients.find((c) => c.id === selectedId) ?? null;
  }, [selectedId]);

  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Clients</h1>
        <p className="to-muted">A quick view of the travellers and accounts you look after the most.</p>

        <div className="to-table-card">
          <div className="to-table-header to-table-header-3">
            <span>Name</span>
            <span>Segment</span>
            <span>Notes</span>
          </div>

          {store.clients.map((client) => (
            <div
              key={client.id}
              className={
                "to-table-row to-table-row-3 to-table-row-clickable" +
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

        <DetailDrawer
          isOpen={Boolean(selected)}
          title={selected ? selected.name : "Client details"}
          subtitle={selected ? selected.segment : undefined}
          onClose={() => setSelectedId(null)}
        >
          {selected ? (
            <div className="to-drawer-grid">
              <div className="to-kv to-kv-wide">
                <div className="to-k">Notes</div>
                <div className="to-v">{selected.notes}</div>
              </div>

              <div className="to-drawer-actions">
                <button className="to-ghost-btn" onClick={() => alert("Next: open client profile")}>Open profile</button>
                <button className="to-primary-btn" onClick={() => alert("Next: create trip for client")}>New trip</button>
              </div>
            </div>
          ) : null}
        </DetailDrawer>
      </section>
    </main>
  );
};
