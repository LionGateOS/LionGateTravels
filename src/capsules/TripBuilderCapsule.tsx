import React, { useState } from 'react';
import Card from '../components/Card';
import Panel from '../components/Panel';
import Button from '../components/Button';

export default function TripBuilderCapsule() {
  const [bags, setBags] = useState(0);
  const [seatType, setSeatType] = useState('ECONOMY');
  const [extrasWifi, setExtrasWifi] = useState(false);
  const [extrasPriority, setExtrasPriority] = useState(false);

  const handleContinue = () => {
    const selection = {
      bags,
      seatType,
      extras: {
        wifi: extrasWifi,
        priorityBoarding: extrasPriority
      }
    };
    console.log('Trip builder selection', selection);
    alert('Trip configuration saved (mock). Backend integration will connect this later.');
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
            onChange={(e) => setBags(parseInt(e.target.value or '0', 10))}
            style={{ width: '60px', padding: '6px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
      </Panel>

      <Panel title="Seat Type">
        <div style={{ display: 'flex', gap: '8px' }}>
          {['ECONOMY', 'PREMIUM', 'BUSINESS'].map((type) => (
            <button
              key={type}
              onClick={() => setSeatType(type)}
              style={{
                padding: '8px 12px',
                borderRadius: '6px',
                border: seatType == type ? '2px solid #0077FF' : '1px solid #ccc',
                background: seatType == type ? '#E6F0FF' : 'white',
                cursor: 'pointer'
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
            onChange={(e) => setExtrasWifi(e.target.checked)}
            style={{ marginRight: '6px' }}
          />
          In-flight Wi-Fi
        </label>
        <label style={{ display: 'block' }}>
          <input
            type="checkbox"
            checked={extrasPriority}
            onChange={(e) => setExtrasPriority(e.target.checked)}
            style={{ marginRight: '6px' }}
          />
          Priority boarding
        </label>
      </Panel>

      <div style={{ marginTop: '16px' }}>
        <Button onClick={handleContinue}>Continue</Button>
      </div>
    </Card>
  );
}
