import { Link } from 'react-router-dom';
import rocketImg from '../../images/rocket.png';
import "../../App.css";

function LandingPageTopSection() {
  return (
    <section className='container-fluid d-flex justify-content-center align-items-center top-section'>
      <div className='container row w-100 top-section-content'>
        <div className='col-lg-8 d-flex flex-column justify-content-around text-start'>
          <div className='heading-container'>
            <h1>Accelerate Innovation with Global AI Challenges</h1>
            <div className='heading-line'></div>
          </div>
          <p>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to the test on diverse datasets, allowing you to foster learning through competitions.</p>
          <Link to="/create-challenge">
            <button className='create-challenge-button'>Create Challenge</button>
          </Link>
        </div>
        <div className='col-lg-4 d-flex justify-content-center align-items-center'>
          <img src={rocketImg} alt="Rocket" className='img-fluid' />
        </div>
      </div>
    </section>
  );
}

export default LandingPageTopSection;
