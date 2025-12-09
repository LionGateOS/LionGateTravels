import React, { useMemo } from 'react';
import Page from '../layouts/Page';
import FlightResultCardCapsule from '../capsules/FlightResultCardCapsule';

type FlightResultsPageProps = {
  search: {
    from: string;
    to: string;
    departDate: string;
    returnDate: string;
    passengers: number;
  };
  onBack: () => void;
  onSelectFlight: (flight: FlightOption) => void;
};

export type FlightOption = {
  id: string;
  airline: string;
  departTime: string;
  arriveTime: string;
  duration: string;
  baseFarePerPassenger: number;
};

export default function FlightResultsPage({
  search,
  onBack,
  onSelectFlight,
}: FlightResultsPageProps) {
  const flights: FlightOption[] = useMemo(
    () => [
      {
        id: 'F1',
        airline: 'Skyline Air',
        departTime: '08:15',
        arriveTime: '10:45',
        duration: '2h 30m',
        baseFarePerPassenger: 280,
      },
      {
        id: 'F2',
        airline: 'Aurora Airways',
        departTime: '12:00',
        arriveTime: '14:35',
        duration: '2h 35m',
        baseFarePerPassenger: 320,
      },
      {
        id: 'F3',
        airline: 'NovaJet',
        departTime: '18:10',
        arriveTime: '20:45',
        duration: '2h 35m',
        baseFarePerPassenger: 260,
      },
    ],
    []
  );

  const title =
    search.from && search.to
      ? `${search.from.toUpperCase()} → ${search.to.toUpperCase()}`
      : 'Available Flights';

  return (
    <Page>
      <button
        onClick={onBack}
        style={{
          marginBottom: '12px',
          padding: '6px 10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          background: 'white',
          cursor: 'pointer',
        }}
      >
        ← Back to Search
      </button>

      <h2>{title}</h2>
      <p>
        Showing sample flight options for your search. This screen will later be powered by
        real airline APIs.
      </p>

      <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
        {flights.map((flight) => (
          <FlightResultCardCapsule
            key={flight.id}
            airline={flight.airline}
            departTime={flight.departTime}
            arriveTime={flight.arriveTime}
            duration={flight.duration}
            price={flight.baseFarePerPassenger}
            onSelect={() => onSelectFlight(flight)}
          />
        ))}
      </div>
    </Page>
  );
}
