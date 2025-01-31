"use client"; // Mark as a Client Component

import { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/679c577a825083258e0e383e/1iitbbdpd';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
  }, []);

  return null;
};

export default LiveChat;