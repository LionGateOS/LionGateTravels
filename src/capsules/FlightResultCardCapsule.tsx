import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

type FlightResultCardCapsuleProps = {
  airline: string;
  departTime: string;
  arriveTime: string;
  duration: string;
  price: number;
  onSelect: () => void;
};

export default function FlightResultCardCapsule({
  airline,
  departTime,
  arriveTime,
  duration,
  price,
  onSelect,
}: FlightResultCardCapsuleProps) {
  return (
    <Card>
      <h3>{airline}</h3>
      <p>
        <strong>Depart:</strong> {departTime} &nbsp;|&nbsp;
        <strong>Arrive:</strong> {arriveTime}
      </p>
      <p>
        <strong>Duration:</strong> {duration}
      </p>
      <p>
        <strong>Price from:</strong> ${price.toFixed(2)}
      </p>
      <div style={{ marginTop: '8px' }}>
        <Button onClick={onSelect}>Select Flight</Button>
      </div>
    </Card>
  );
}
