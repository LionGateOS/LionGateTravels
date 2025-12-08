import React from 'react';
import Card from '../components/Card';

type TripDetailsProps = {
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  passengers: number;
  baseFare: number;
  taxes: number;
};

export default function TripDetailsCapsule({
  from,
  to,
  departDate,
  returnDate,
  passengers,
  baseFare,
  taxes
}: TripDetailsProps) {
  const total = baseFare + taxes;

  return (
    <Card>
      <h3>Trip Details</h3>
      <p>
        <strong>From:</strong> {from} &rarr; <strong>To:</strong> {to}
      </p>
      <p>
        <strong>Depart:</strong> {departDate || 'TBD'} &nbsp;|&nbsp;
        <strong>Return:</strong> {returnDate || 'TBD'}
      </p>
      <p>
        <strong>Passengers:</strong> {passengers}
      </p>
      <hr />
      <p>
        <strong>Base fare:</strong> ${baseFare.toFixed(2)}
      </p>
      <p>
        <strong>Taxes & fees:</strong> ${taxes.toFixed(2)}
      </p>
      <p>
        <strong>Total:</strong> ${total.toFixed(2)}
      </p>
    </Card>
  );
}
