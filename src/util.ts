import React from 'react';

export function activeEnter(callback: () => void) {
  return (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    callback();
  };
}
