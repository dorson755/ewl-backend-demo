"use client"; // Mark as a Client Component

interface User {
  name: string;
  score: number;
}

interface LeaderboardProps {
  data: User[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ data }) => {
  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            {user.name}: {user.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;