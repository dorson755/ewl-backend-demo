"use client"; // Mark as a Client Component

import { useState } from 'react';
import axios from 'axios';

export default function AddScore() {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/add-score', { name, score });
      alert('Score added successfully!');
      setName('');
      setScore('');
    } catch (error) {
      console.error('Error adding score:', error);
      alert('Failed to add score. Please try again.');
    }
  };

  return (
    <div>
      <h1>Add Score</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
        />
        <button type="submit">Add Score</button>
      </form>
    </div>
  );
}