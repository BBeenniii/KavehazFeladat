import axios from 'axios';

interface Concert {
  id: number;
  performer: string;
  startTime: string;
  duration: number;
  isCancelled: boolean;
}

interface ConcertCardProps {
  concert: Concert;
  refreshConcerts: () => void;
}

const ConcertCard: React.FC<ConcertCardProps> = ({ concert, refreshConcerts }) => {
  const handleCancel = async () => {
    try {
      await axios.patch(`http://localhost:3000/concerts/${concert.id}/cancel`);
      refreshConcerts();
    } catch (error) {
      console.error('Hiba a koncert elmaradásának beállításakor:', error);
    }
  };

  return (
    <div
      style={{
        padding: '10px',
        margin: '10px',
        border: '1px solid black',
        backgroundColor: concert.isCancelled ? 'red' : 'white',
        textDecoration: concert.isCancelled ? 'line-through' : 'none',
      }}
    >
      <h3>{concert.performer}</h3>
      <p>Kezdés: {new Date(concert.startTime).toLocaleString()}</p>
      <p>Időtartam: {concert.duration} perc</p>
      {!concert.isCancelled && <button onClick={handleCancel}>Elmarad</button>}
    </div>
  );
};

export default ConcertCard;
