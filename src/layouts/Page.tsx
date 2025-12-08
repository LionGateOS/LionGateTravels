
import React from 'react';

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {children}
    </div>
  );
}
