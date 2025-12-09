import React, { useState } from 'react';
import Page from '../layouts/Page';
import SearchCapsule from '../capsules/SearchCapsule';
import Button from '../components/Button';
import TripDetailsPage from './TripDetailsPage';

type TripData = {
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  passengers: number;
};

export default function Home() {
  const [view, setView] = useState<'SEARCH' | 'TRIP_DETAILS'>('SEARCH');
  const [tripData, setTripData] = useState<TripData | null>(null);

  const handleSearch = (data: TripData) => {
    setTripData(data);
    setView('TRIP_DETAILS');
  };

  if (view === 'TRIP_DETAILS' && tripData) {
    return (
      <Page>
        <Button onClick={() => setView('SEARCH')}>Back to Search</Button>
        <div style={{ marginTop: '16px' }}>
          <TripDetailsPage {...tripData} />
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <SearchCapsule onSearch={handleSearch} />
    </Page>
  );
}
