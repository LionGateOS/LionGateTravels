
import React, { useMemo, useState } from 'react';
import Page from '../layouts/Page';
import TripDetailsCapsule from '../capsules/TripDetailsCapsule';
import TripBuilderCapsule from '../capsules/TripBuilderCapsule';

type TripDetailsPageProps = {
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  passengers: number;
  onCheckout: (order: TripOrder) => void;
  baseFarePerPassengerOverride?: number;
};

type SeatType = 'ECONOMY' | 'PREMIUM' | 'BUSINESS';

const DEFAULT_BASE_FARE_PER_PASSENGER = 300;
const TAX_RATE = 0.22;
const BAG_FEE = 35;
const WIFI_FEE = 12;
const PRIORITY_FEE = 24;

export type TripOrder = {
  tripDetails: {
    from: string;
    to: string;
    departDate: string;
    returnDate: string;
    passengers: number;
  };
  pricing: {
    baseFare: number;
    taxes: number;
    extrasTotal: number;
    total: number;
  };
  selections: {
    bags: number;
    seatType: SeatType;
    extrasWifi: boolean;
    extrasPriority: boolean;
  };
};

export default function TripDetailsPage({
  from,
  to,
  departDate,
  returnDate,
  passengers,
  onCheckout,
  baseFarePerPassengerOverride,
}: TripDetailsPageProps) {
  const [bags, setBags] = useState(0);
  const [seatType, setSeatType] = useState<SeatType>('ECONOMY');
  const [extrasWifi, setExtrasWifi] = useState(false);
  const [extrasPriority, setExtrasPriority] = useState(false);

  const summary = useMemo(() => {
    const seatMultiplierMap: Record<SeatType, number> = {
      ECONOMY: 1.0,
      PREMIUM: 1.3,
      BUSINESS: 1.8,
    };

    const perPassengerBase =
      typeof baseFarePerPassengerOverride === 'number'
        ? baseFarePerPassengerOverride
        : DEFAULT_BASE_FARE_PER_PASSENGER;

    const seatMultiplier = seatMultiplierMap[seatType];
    const baseFare = perPassengerBase * seatMultiplier * passengers;
    const taxes = baseFare * TAX_RATE;
    const extrasTotal =
      bags * BAG_FEE +
      (extrasWifi ? WIFI_FEE : 0) +
      (extrasPriority ? PRIORITY_FEE : 0);
    const total = baseFare + taxes + extrasTotal;

    return { baseFare, taxes, extrasTotal, total };
  }, [bags, seatType, extrasWifi, extrasPriority, passengers, baseFarePerPassengerOverride]);

  const handleContinueToCheckout = () => {
    const order: TripOrder = {
      tripDetails: {
        from,
        to,
        departDate,
        returnDate,
        passengers,
      },
      pricing: {
        baseFare: summary.baseFare,
        taxes: summary.taxes,
        extrasTotal: summary.extrasTotal,
        total: summary.total,
      },
      selections: {
        bags,
        seatType,
        extrasWifi,
        extrasPriority,
      },
    };

    onCheckout(order);
  };

  return (
    <Page>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <div
          style={{
            fontSize: '0.78rem',
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            color: '#9ba7ff',
          }}
        >
          STEP 4 · CUSTOMIZE TRIP
        </div>
      </div>

      <h2 style={{ margin: '0 0 4px', fontSize: '1.4rem' }}>Trip details</h2>
      <p style={{ margin: '0 0 18px', fontSize: '0.92rem', color: '#c3ccff' }}>
        Review your route and fine‑tune bags, seats, and extras. All pricing updates live as you adjust options.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.1fr', gap: '16px', marginTop: '10px' }}>
        <TripDetailsCapsule
          from={from}
          to={to}
          departDate={departDate}
          returnDate={returnDate}
          passengers={passengers}
          baseFare={summary.baseFare}
          taxes={summary.taxes}
          extrasTotal={summary.extrasTotal}
          total={summary.total}
        />
        <TripBuilderCapsule
          bags={bags}
          seatType={seatType}
          extrasWifi={extrasWifi}
          extrasPriority={extrasPriority}
          onBagsChange={setBags}
          onSeatTypeChange={setSeatType}
          onExtrasWifiChange={setExtrasWifi}
          onExtrasPriorityChange={setExtrasPriority}
          summary={summary}
          onContinue={handleContinueToCheckout}
        />
      </div>
    </Page>
  );
}
