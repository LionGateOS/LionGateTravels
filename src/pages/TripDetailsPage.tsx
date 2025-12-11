
import React from 'react';
import Page from '../layouts/Page';
import PricingEngineCapsule from '../capsules/PricingEngineCapsule';

export default function TripDetailsPage() {
  return (
    <Page>
      <h2>Trip Details + Pricing Engine</h2>
      <PricingEngineCapsule providerA={280} providerB={295} providerC={265} markup={7} />
    </Page>
  );
}
