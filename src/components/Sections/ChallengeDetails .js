import { useRecoilState } from 'recoil';
import { challengesState } from '../../recoil/atoms/atoms';
import Header from '../Header/Header';
import clock from '../../images/clock.png';
import graph from '../../images/graph.png';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { useEffect } from 'react';

function ChallengeDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [challenges, setChallenges] = useRecoilState(challengesState); 
  

  const challenge = challenges.find(challenge => challenge.id === parseInt(id, 10));

  useEffect(() => {
    if (!challenge) {
      // toast.error('Invalid challenge ID! Redirecting to homepage...', {
      //   duration: 3000,
      // });

      const timeoutId = setTimeout(() => {
        navigate('/');
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [challenge, navigate]);


  if (!challenge) {
    return <h3>Challenge Not Found</h3>; 
  }

  const { name, startDate, description, level } = challenge;


  const formatDate = (date) => {
    try {
      const formattedDate = format(new Date(date), "d MMM yyyy h:mm a", { locale: enUS });
      console.log('Formatted Date:', formattedDate); 
      return formattedDate;
    } catch (error) {
      console.error('Date formatting error:', error);
      return date; 
    }
  };

  const handleEdit = () => {

    navigate(`/update-challenge/${id}`);
  };

  const handleDelete = () => {

    const updatedChallenges = challenges.filter(challenge => challenge.id !== parseInt(id, 10));
    

    setChallenges(updatedChallenges);
  
 
    toast.success('Challenge deleted successfully!', {
      duration: 4000,
      position: 'top-center',
    });
  
    navigate('/');
  };

  return (
    <>
      <Header />
      <section className="challenge-top-section d-flex align-item-center">
        <div className="container d-flex flex-column justify-content-center">
          <div className="col-lg-5 col-md-6 col-sm-10 challenge-time-container d-flex align-item-center">
            <img src={clock} alt="clock" className="clock-icon" />
            <p>Starts on {formatDate(startDate)} (India Standard Time)</p>
          </div>
          <div className="col-lg-8 challenge-name-container">
            <h1>{name}</h1>
            <p>{description || 'No description available'}</p>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-3 challenge-level-container d-flex align-item-center justify-content-center">
            <img src={graph} alt="graph" className="graph-icon" />
            <p className='text-center'>{level}</p>
          </div>
        </div>
      </section>
      <section className="challenge-middle-section">
        <div className="overview-section">
          <div className="container d-flex align-item-center justify-content-between pt-3">
            <h2 className="text-center">Overview</h2>
            <div>
              <button className="edit-button" onClick={handleEdit}>Edit</button>
              <button className="delete-button" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </section>
      <section className="challenge-bottom-section">
        <div className="container">
          <div className="col-lg-10">
            <p>
              Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera.
              The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group
              because their wings are covered with thousands of tiny scales overlapping in rows.
            </p>
            <p>
              An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on
              computer vision so that it can identify butterflies based on captured images. As a consultant for this project,
              you are responsible for developing an efficient model.
            </p>
            <p>
              Your Task is to build an Image Classification Model using CNN that classifies to which class of weather
              each image belongs to.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChallengeDetails;
