import React from 'react';
import Page from '../layouts/Page';
import TripDetailsCapsule from '../capsules/TripDetailsCapsule';
import TripBuilderCapsule from '../capsules/TripBuilderCapsule';

type TripDetailsPageProps = {
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  passengers: number;
};

export default function TripDetailsPage({
  from,
  to,
  departDate,
  returnDate,
  passengers,
}: TripDetailsPageProps) {
  // Static pricing for now; logic can evolve later.
  const baseFare = 350;
  const taxes = 95;

  return (
    <Page>
      <h2>Trip Details</h2>
      <p>This screen is now driven by your actual search inputs.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '16px', marginTop: '16px' }}>
        <TripDetailsCapsule
          from={from}
          to={to}
          departDate={departDate}
          returnDate={returnDate}
          passengers={passengers}
          baseFare={baseFare}
          taxes={taxes}
        />
        <TripBuilderCapsule />
      </div>
    </Page>
  );
}
