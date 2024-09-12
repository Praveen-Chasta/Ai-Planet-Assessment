import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import CreateChallenges from './components/Sections/CreateChallenges';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create-challenge" element={<CreateChallenges />} />
      {/* Add other routes here */}
    </Routes>
  );
}

export default App;
