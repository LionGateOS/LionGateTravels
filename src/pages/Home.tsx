import React, { useState } from 'react';
import Page from '../layouts/Page';
import SearchCapsule from '../capsules/SearchCapsule';
import Button from '../components/Button';
import TripDetailsPage, { TripOrder } from './TripDetailsPage';
import CheckoutPage from './CheckoutPage';

type TripData = {
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  passengers: number;
};

type ViewState = 'SEARCH' | 'TRIP_DETAILS' | 'CHECKOUT' | 'CONFIRMED';

export default function Home() {
  const [view, setView] = useState<ViewState>('SEARCH');
  const [tripData, setTripData] = useState<TripData | null>(null);
  const [order, setOrder] = useState<TripOrder | null>(null);

  const handleSearch = (data: TripData) => {
    setTripData(data);
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

  if (view === 'TRIP_DETAILS' && tripData) {
    return (
      <Page>
        <Button onClick={() => setView('SEARCH')}>Back to Search</Button>
        <div style={{ marginTop: '16px' }}>
          <TripDetailsPage
            from={tripData.from}
            to={tripData.to}
            departDate={tripData.departDate}
            returnDate={tripData.returnDate}
            passengers={tripData.passengers}
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
