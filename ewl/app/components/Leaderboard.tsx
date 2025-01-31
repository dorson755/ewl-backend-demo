"use client"; // Mark as a Client Component

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Score {
  name: string;
  score: number;
}

const Leaderboard = () => {
  const [topScores, setTopScores] = useState<Score[]>([]);

  useEffect(() => {
    axios.get<Score[]>('/api/leaderboard').then((response) => {
      setTopScores(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {topScores.map((user, index) => (
          <li key={index}>
            {user.name}: {user.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;