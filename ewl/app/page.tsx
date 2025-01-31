import LiveChat from './components/LiveChat';
import Leaderboard from './components/Leaderboard';
import Geolocation from './components/Geolocation';
import WATINotification from './components/WATINotification';

export default function Home() {

  return (
    <div className="container my-5">
      <h1 className="text-center text-3xl font-bold mb-4">Welcome to the Demo Site</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {[
          { title: "Live Chat", component: <LiveChat /> },
          { title: "Leaderboard", component: <Leaderboard/> },
          { title: "Geolocation", component: <Geolocation /> },
          { title: "Notifications", component: <WATINotification /> },
        ].map(({ title, component }, index) => (
          <div key={index} className="relative p-[2px] rounded-lg bg-gradient-to-r from-teal-500 to-cyan-400 transition-all duration-300 ease-in-out hover:ring-4 hover:ring-teal-500">
            <div className="card shadow-lg bg-white rounded-lg p-3 w-[20vw] h-[30vh] flex items-center justify-center">
              <div className="card-body text-center">
                <h5 className="card-title font-bold text-lg">{title}</h5>
                {component}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}