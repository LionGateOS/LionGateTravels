import React from "react";

const trips = [
  { traveller: "Ana & Marco Silva", destination: "Lisbon", dates: "12–17 Apr", status: "Confirmed" },
  { traveller: "J. Martinez", destination: "New York", dates: "03–09 May", status: "Quote sent" },
  { traveller: "Smith family", destination: "Orlando", dates: "21–28 Jun", status: "Deposit due" }
];

export const TripsPage: React.FC = () => {
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
          {trips.map((trip) => (
            <div key={trip.traveller + trip.destination} className="to-table-row">
              <span>{trip.traveller}</span>
              <span>{trip.destination}</span>
              <span>{trip.dates}</span>
              <span className="to-pill-slim">{trip.status}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
