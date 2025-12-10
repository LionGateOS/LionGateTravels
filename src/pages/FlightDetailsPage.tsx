import React from 'react';
import Page from '../layouts/Page';
import Button from '../components/Button';
import type { FlightOption } from './FlightResultsPage';

type FlightDetailsPageProps = {
  flight: FlightOption | null;
  onBack: () => void;
  onContinue: () => void;
};

export default function FlightDetailsPage({
  flight,
  onBack,
  onContinue,
}: FlightDetailsPageProps) {
  if (!flight) {
    return (
      <Page>
        <p>No flight selected.</p>
        <div style={{ marginTop: '16px' }}>
          <Button onClick={onBack}>Back to Results</Button>
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <h2>Flight Details</h2>
      <p>
        <strong>Airline:</strong> {flight.airline}
      </p>
      <p>
        <strong>Depart:</strong> {flight.departTime}
      </p>
      <p>
        <strong>Arrive:</strong> {flight.arriveTime}
      </p>
      <p>
        <strong>Duration:</strong> {flight.duration}
      </p>
      <p>
        <strong>Base Fare Per Passenger:</strong> ${flight.baseFarePerPassenger.toFixed(2)}
      </p>

      <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
        <Button onClick={onBack}>Back to Results</Button>
        <Button onClick={onContinue}>Continue</Button>
      </div>
    </Page>
  );
}
