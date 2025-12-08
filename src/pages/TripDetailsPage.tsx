import React from 'react';
import Page from '../layouts/Page';
import TripDetailsCapsule from '../capsules/TripDetailsCapsule';
import TripBuilderCapsule from '../capsules/TripBuilderCapsule';

export default function TripDetailsPage() {
  const mockTrip = {
    from: 'YYZ',
    to: 'JFK',
    departDate: '2025-06-01',
    returnDate: '2025-06-08',
    passengers: 1,
    baseFare: 350,
    taxes: 95
  };

  return (
    <Page>
      <h2>Trip Details</h2>
      <p>This screen will eventually be fed by your real AI-powered search results.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '16px', marginTop: '16px' }}>
        <TripDetailsCapsule {...mockTrip} />
        <TripBuilderCapsule />
      </div>
    </Page>
  );
}
