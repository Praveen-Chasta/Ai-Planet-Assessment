import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LandingPage from './components/LandingPage/LandingPage';
import CreateChallenges from './components/Sections/CreateChallenges';
import ChallengeDetails from './components/Sections/ChallengeDetails '; 

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-challenge" element={<CreateChallenges />} />
        <Route path="/challenge/:id" element={<ChallengeDetails />} /> 
      </Routes>
    </RecoilRoot>
  );
}

export default App;
