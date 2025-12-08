import React, { useState } from 'react';
import Page from '../layouts/Page';
import SearchCapsule from '../capsules/SearchCapsule';
import Button from '../components/Button';
import TripDetailsPage from './TripDetailsPage';

export default function Home() {
  const [view, setView] = useState('SEARCH');

  if (view === 'TRIP_DETAILS') {
    return (
      <Page>
        <Button onClick={() => setView('SEARCH')}>Back to Search</Button>
        <div style={{ marginTop: '16px' }}>
          <TripDetailsPage />
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <SearchCapsule />
      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => setView('TRIP_DETAILS')}>
          View Sample Trip Details
        </Button>
      </div>
    </Page>
  );
}
