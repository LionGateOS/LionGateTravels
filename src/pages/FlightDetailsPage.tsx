
import React from 'react';
import Page from '../layouts/Page';
import Button from '../components/Button';

export default function FlightDetailsPage({ flight, onBack, onContinue }) {
  if (!flight) return <Page><p>No flight selected.</p></Page>;

  return (
    <Page>
      <h2>Flight Details</h2>
      <p><strong>Airline:</strong> {flight.airline}</p>
      <p><strong>Depart:</strong> {flight.departTime}</p>
      <p><strong>Arrive:</strong> {flight.arriveTime}</p>
      <p><strong>Duration:</strong> {flight.duration}</p>
      <p><strong>Base Fare Per Passenger:</strong> ${flight.baseFarePerPassenger.toFixed(2)}</p>
      <div style={{marginTop:'16px'}}>
        <Button onClick={onBack}>Back to Results</Button>
        <Button onClick={onContinue} style={{marginLeft:'8px'}}>Continue</Button>
      </div>
    </Page>
  );
}
