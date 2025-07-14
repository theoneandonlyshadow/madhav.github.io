'use client'

import { useEffect } from 'react';

export default function RegisterServiceWorker() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(reg => {
          console.log('Reggied SW:', reg);
        })
        .catch(err => {
          console.error('Didnt reggie SW:', err);
        });
    }
  }, []);

  return null;
}
