import React, { useState } from "react";
import { store } from "../data/store";

export const TripsPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <main className="to-dashboard">
      <section className="to-section">
        <h1 className="to-h1">Trips</h1>
        <p className="to-muted">
          All active and upcoming trips you are curating for your travellers.
        </p>
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
        {selectedId && (
          <div className="to-selection-hint">
            Selected trip ID: <span>{selectedId}</span>
          </div>
        )}
      </section>
    </main>
  );
};
