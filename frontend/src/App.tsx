import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NewConcert from './pages/NewConcert';

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 flex gap-4">
          <Link to="/" className="text-blue-500">Koncertek</Link>
          <Link to="/new" className="text-blue-500">Új koncert</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewConcert />} />
        </Routes>
      </div>
    </Router>
  );
}