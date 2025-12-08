
import React from 'react';

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}
    >
      {children}
    </div>
  );
}
