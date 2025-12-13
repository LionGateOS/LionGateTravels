import React, { useMemo, useState } from "react";
import { store } from "../data/store";
import { DetailDrawer } from "../components/DetailDrawer";

export const TripsPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = useMemo(() => {
    if (!selectedId) return null;
    return store.trips.find((t) => t.id === selectedId) ?? null;
  }, [selectedId]);

  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Trips</h1>
        <p className="to-muted">All active and upcoming trips you are curating for your travellers.</p>

        <div className="to-table-card">
          <div className="to-table-header">
            <span>Traveller</span>
            <span>Destination</span>
            <span>Dates</span>
            <span>Status</span>
          </div>

          {store.trips.map((trip) => (
            <div
              key={trip.id}
              className={
                "to-table-row to-table-row-clickable" +
                (trip.id === selectedId ? " to-table-row-selected" : "")
              }
              onClick={() => setSelectedId(trip.id)}
            >
              <span>{trip.traveller}</span>
              <span>{trip.destination}</span>
              <span>{trip.dates}</span>
              <span className="to-pill-slim">{trip.status}</span>
            </div>
          ))}
        </div>

        <DetailDrawer
          isOpen={Boolean(selected)}
          title={selected ? selected.traveller : "Trip details"}
          subtitle={selected ? `${selected.destination} · ${selected.dates}` : undefined}
          onClose={() => setSelectedId(null)}
        >
          {selected ? (
            <div className="to-drawer-grid">
              <div className="to-kv">
                <div className="to-k">Status</div>
                <div className="to-v">{selected.status}</div>
              </div>
              <div className="to-kv">
                <div className="to-k">Destination</div>
                <div className="to-v">{selected.destination}</div>
              </div>
              <div className="to-kv">
                <div className="to-k">Dates</div>
                <div className="to-v">{selected.dates}</div>
              </div>
              <div className="to-kv to-kv-wide">
                <div className="to-k">Notes</div>
                <div className="to-v">{selected.notes ?? "—"}</div>
              </div>

              <div className="to-drawer-actions">
                <button className="to-ghost-btn" onClick={() => alert("Next: edit trip")}>Edit</button>
                <button className="to-primary-btn" onClick={() => alert("Next: open workflow")}>Open workflow</button>
              </div>
            </div>
          ) : null}
        </DetailDrawer>
      </section>
    </main>
  );
};
