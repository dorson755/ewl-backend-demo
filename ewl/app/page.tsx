import LiveChat from './components/LiveChat';
import Leaderboard from './components/Leaderboard';
import Geolocation from './components/Geolocation';
import WATINotification from './components/WATINotification';

export default function Home() {
  const leaderboardData = [
    { name: 'Alice', score: 100 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 80 },
  ];

  return (
    <div>
      <h1>Welcome to the Demo Site</h1>
      <LiveChat />
      <Leaderboard data={leaderboardData} />
      <Geolocation />
      <WATINotification />
    </div>
  );
}