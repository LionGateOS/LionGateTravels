import React, { useState } from 'react';
import Page from '../layouts/Page';
import SearchCapsule from '../capsules/SearchCapsule';
import Button from '../components/Button';
import TripDetailsPage, { TripOrder } from './TripDetailsPage';
import CheckoutPage from './CheckoutPage';
import FlightResultsPage, { FlightOption } from './FlightResultsPage';

type SearchData = {
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  passengers: number;
};

type ViewState = 'SEARCH' | 'RESULTS' | 'TRIP_DETAILS' | 'CHECKOUT' | 'CONFIRMED';

export default function Home() {
  const [view, setView] = useState<ViewState>('SEARCH');
  const [searchData, setSearchData] = useState<SearchData | null>(null);
  const [selectedFlight, setSelectedFlight] = useState<FlightOption | null>(null);
  const [order, setOrder] = useState<TripOrder | null>(null);

  const handleSearch = (data: SearchData) => {
    setSearchData(data);
    setSelectedFlight(null);
    setView('RESULTS');
  };

  const handleFlightSelected = (flight: FlightOption) => {
    setSelectedFlight(flight);
    setView('TRIP_DETAILS');
  };

  const handleCheckoutStart = (newOrder: TripOrder) => {
    setOrder(newOrder);
    setView('CHECKOUT');
  };

  const handleBookingConfirmed = () => {
    setView('CONFIRMED');
  };

  if (view === 'CHECKOUT' && order) {
    return (
      <CheckoutPage
        order={order}
        onBack={() => setView('TRIP_DETAILS')}
        onConfirm={handleBookingConfirmed}
      />
    );
  }

  if (view === 'RESULTS' && searchData) {
    return (
      <FlightResultsPage
        search={searchData}
        onBack={() => setView('SEARCH')}
        onSelectFlight={handleFlightSelected}
      />
    );
  }

  if (view === 'TRIP_DETAILS' && searchData) {
    const baseFarePerPassengerOverride = selectedFlight?.baseFarePerPassenger;

    return (
      <Page>
        <Button onClick={() => setView('RESULTS')}>Back to Results</Button>
        <div style={{ marginTop: '16px' }}>
          <TripDetailsPage
            from={searchData.from}
            to={searchData.to}
            departDate={searchData.departDate}
            returnDate={searchData.returnDate}
            passengers={searchData.passengers}
            baseFarePerPassengerOverride={baseFarePerPassengerOverride}
            onCheckout={handleCheckoutStart}
          />
        </div>
      </Page>
    );
  }

  if (view === 'CONFIRMED' && order) {
    return (
      <Page>
        <h2>Booking Confirmed</h2>
        <p>Your booking has been recorded (simulation).</p>
        <p>
          <strong>Route:</strong> {order.tripDetails.from} → {order.tripDetails.to}
        </p>
        <p>
          <strong>Total Paid:</strong> ${order.pricing.total.toFixed(2)}
        </p>
        <div style={{ marginTop: '16px' }}>
          <Button onClick={() => setView('SEARCH')}>Start a New Search</Button>
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
