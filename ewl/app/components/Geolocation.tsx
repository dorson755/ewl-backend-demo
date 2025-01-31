"use client"; // Mark as a Client Component

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Location {
  city: string;
  country_name: string;
}

const Geolocation = () => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    axios.get<Location>('/api/geolocation').then((response) => {
      setLocation(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Your Location</h2>
      {location ? (
        <p>
          {location.city}, {location.country_name}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Geolocation;