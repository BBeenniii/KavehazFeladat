import { useEffect, useState } from 'react';
import axios from 'axios';
import ConcertCard from '../components/ConcertCard';

interface Concert {
  id: number;
  performer: string;
  startTime: string;
  duration: number;
  isCancelled: boolean;
}

const Home = () => {
  const [concerts, setConcerts] = useState<Concert[]>([]);

  const fetchConcerts = async () => {
    try {
      const response = await axios.get<Concert[]>('http://localhost:3000/concerts');
      setConcerts(response.data);
    } catch (error) {
      console.error('Hiba a koncertek betöltésekor:', error);
    }
  };

  useEffect(() => {
    fetchConcerts();
  }, []);

  return (
    <div>
      <h2>Koncertek</h2>
      {concerts.map((concert) => (
        <ConcertCard key={concert.id} concert={concert} refreshConcerts={fetchConcerts} />
      ))}
    </div>
  );
};

export default Home;
