import { useState } from 'react';
import axios from 'axios';

const NewConcert = () => {
  const [performer, setPerformer] = useState('');
  const [startTime, setStartTime] = useState('');
  const [duration, setDuration] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    try {
      const response = await axios.post('http://localhost:3000/concerts', {
        performer,
        startTime: new Date(startTime).toISOString(),
        duration: Number(duration),
        isCancelled: false,
      });

      setPerformer('');
      setStartTime('');
      setDuration('');
      console.log('Siker:', response.data);
      alert("Koncert sikeresen hozzáadva!")
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || 'Ismeretlen hiba történt.');
    }
  };

  return (
    <div>
      <h2>Új koncert hozzáadása</h2>
      {errorMessage && <p style={{ color: 'red' }}>Hiba: {errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Előadó" value={performer} onChange={(e) => setPerformer(e.target.value)} required />
        <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
        <input type="number" placeholder="Időtartam (perc)" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        <button type="submit">Hozzáadás</button>
      </form>
    </div>
  );
};

export default NewConcert;
