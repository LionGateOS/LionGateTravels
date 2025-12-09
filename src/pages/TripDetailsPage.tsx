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
};

type SeatType = 'ECONOMY' | 'PREMIUM' | 'BUSINESS';

const BASE_FARE_PER_PASSENGER = 300;
const TAX_RATE = 0.22;
const BAG_FEE = 35;
const WIFI_FEE = 12;
const PRIORITY_FEE = 24;

export default function TripDetailsPage({
  from,
  to,
  departDate,
  returnDate,
  passengers,
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

    const seatMultiplier = seatMultiplierMap[seatType];
    const baseFare = BASE_FARE_PER_PASSENGER * seatMultiplier * passengers;
    const taxes = baseFare * TAX_RATE;
    const extrasTotal =
      bags * BAG_FEE +
      (extrasWifi ? WIFI_FEE : 0) +
      (extrasPriority ? PRIORITY_FEE : 0);
    const total = baseFare + taxes + extrasTotal;

    return { baseFare, taxes, extrasTotal, total };
  }, [bags, seatType, extrasWifi, extrasPriority, passengers]);

  return (
    <Page>
      <h2>Trip Details</h2>
      <p>This screen is now driven by your actual search inputs and dynamic pricing.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '16px', marginTop: '16px' }}>
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
        />
      </div>
    </Page>
  );
}
