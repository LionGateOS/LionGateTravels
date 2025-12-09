import React from 'react';
import Card from '../components/Card';
import Panel from '../components/Panel';
import Button from '../components/Button';

type SeatType = 'ECONOMY' | 'PREMIUM' | 'BUSINESS';

type TripBuilderCapsuleProps = {
  bags: number;
  seatType: SeatType;
  extrasWifi: boolean;
  extrasPriority: boolean;
  onBagsChange: (bags: number) => void;
  onSeatTypeChange: (seatType: SeatType) => void;
  onExtrasWifiChange: (value: boolean) => void;
  onExtrasPriorityChange: (value: boolean) => void;
  summary: {
    baseFare: number;
    taxes: number;
    extrasTotal: number;
    total: number;
  };
  onContinue: () => void;
};

export default function TripBuilderCapsule({
  bags,
  seatType,
  extrasWifi,
  extrasPriority,
  onBagsChange,
  onSeatTypeChange,
  onExtrasWifiChange,
  onExtrasPriorityChange,
  summary,
  onContinue,
}: TripBuilderCapsuleProps) {
  const handleBagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value || '0', 10);
    onBagsChange(Number.isNaN(value) ? 0 : value);
  };

  return (
    <Card>
      <h3>Trip Builder</h3>

      <Panel title="Bags">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span>Checked bags:</span>
          <input
            type="number"
            min={0}
            max={4}
            value={bags}
            onChange={handleBagsChange}
            style={{ width: '60px', padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
      </Panel>

      <Panel title="Seat Type">
        <div style={{ display: 'flex', gap: '8px' }}>
          {(['ECONOMY', 'PREMIUM', 'BUSINESS'] as SeatType[]).map((type) => (
            <button
              key={type}
              onClick={() => onSeatTypeChange(type)}
              style={{
                padding: '8px 12px',
                borderRadius: '6px',
                border: seatType === type ? '2px solid #0077FF' : '1px solid #ccc',
                background: seatType === type ? '#E6F0FF' : 'white',
                cursor: 'pointer',
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </Panel>

      <Panel title="Extras">
        <label style={{ display: 'block', marginBottom: '8px' }}>
          <input
            type="checkbox"
            checked={extrasWifi}
            onChange={(e) => onExtrasWifiChange(e.target.checked)}
            style={{ marginRight: '6px' }}
          />
          In-flight Wi-Fi
        </label>
        <label style={{ display: 'block' }}>
          <input
            type="checkbox"
            checked={extrasPriority}
            onChange={(e) => onExtrasPriorityChange(e.target.checked)}
            style={{ marginRight: '6px' }}
          />
          Priority boarding
        </label>
      </Panel>

      <Panel title="Price Summary">
        <p>
          <strong>Base fare:</strong> ${summary.baseFare.toFixed(2)}
        </p>
        <p>
          <strong>Taxes & fees:</strong> ${summary.taxes.toFixed(2)}
        </p>
        <p>
          <strong>Extras:</strong> ${summary.extrasTotal.toFixed(2)}
        </p>
        <p>
          <strong>Total:</strong> ${summary.total.toFixed(2)}
        </p>
      </Panel>

      <div style={{ marginTop: '16px' }}>
        <Button onClick={onContinue}>
          Continue to Checkout
        </Button>
      </div>
    </Card>
  );
}
