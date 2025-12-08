
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 16px',
        background: '#0077FF',
        color: 'white',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
}
