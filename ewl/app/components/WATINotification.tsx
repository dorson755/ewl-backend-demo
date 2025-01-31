"use client"; // Mark as a Client Component

import { useState } from 'react';
import axios from 'axios';

const WATINotification = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('/api/wati', { phone, message });
    alert('Notification sent!');
  };

  return (
    <div>
      <h2>Send WhatsApp Notification</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default WATINotification;