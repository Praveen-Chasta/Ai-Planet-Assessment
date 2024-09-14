import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LandingPage from './components/LandingPage/LandingPage';
import CreateChallenges from './components/Sections/CreateChallenges';
import ChallengeDetails from './components/Sections/ChallengeDetails '; 
import UpdateSection from './components/Sections/UpdateSection'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <RecoilRoot>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-challenge" element={<CreateChallenges />} />
        <Route path="/challenge/:id" element={<ChallengeDetails />} /> 
        <Route path="/update-challenge/:challengeId" element={<UpdateSection />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
