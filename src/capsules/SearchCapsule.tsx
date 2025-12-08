
import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function SearchCapsule() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [depart, setDepart] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    console.log({
      from,
      to,
      depart,
      returnDate,
      passengers
    });
    alert('Search submitted! (Backend integration coming soon)');
  };

  return (
    <Card>
      <h3>Search Flights</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

        <input
          placeholder="Departure Airport"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
        />

        <input
          placeholder="Arrival Airport"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
        />

        <input
          type="date"
          value={depart}
          onChange={(e) => setDepart(e.target.value)}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
        />

        <input
          type="date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
        />

        <input
          type="number"
          min="1"
          value={passengers}
          onChange={(e) => setPassengers(parseInt(e.target.value))}
          style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc' }}
        />

        <Button onClick={handleSearch}>Search</Button>
      </div>
    </Card>
  );
}
