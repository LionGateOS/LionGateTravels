
import React from 'react';

export default function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2 style={{ marginBottom: '10px' }}>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
