import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import DatePicker from 'react-datepicker';
import calendar from '../../images/calender.png';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { challengesState } from '../../recoil/atoms/atoms';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function UpdateSection() {
  const { challengeId } = useParams(); 
  console.log('Challenge ID:', challengeId);
  const challenges = useRecoilValue(challengesState); 
  const setChallenges = useSetRecoilState(challengesState); 

  const [challengeName, setChallengeName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [level, setLevel] = useState('Easy');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    console.log('Challenges:', challenges);
    const existingChallenge = challenges.find((challenge) => challenge.id === parseInt(challengeId));
    if (existingChallenge) {
      console.log('Existing Challenge:', existingChallenge); 
      setChallengeName(existingChallenge.name);
      setStartDate(new Date(existingChallenge.startDate));
      setEndDate(new Date(existingChallenge.endDate));
      setLevel(existingChallenge.level);
      setDescription(existingChallenge.description);
      setImagePreview(existingChallenge.image); 
    } else {
      console.error('Challenge not found with ID:', challengeId); 
    }
  }, [challengeId, challenges]);

  const handleUpdateChallenge = () => {
    const now = new Date();
    let status = '';

    if (endDate < now) {
      status = 'Past';
    } else if (startDate > now) {
      status = 'Upcoming';
    } else {
      status = 'Active';
    }

    const updatedChallenge = {
      id: parseInt(challengeId), 
      name: challengeName,
      startDate,
      endDate,
      level,
      description,
      status,
      image: imagePreview,
    };

    
    const updatedChallenges = challenges.map((challenge) =>
      challenge.id === parseInt(challengeId) ? updatedChallenge : challenge
    );
    setChallenges(updatedChallenges);

    
    toast.success('Challenge updated successfully!', {
      duration: 4000,
      position: 'top-center',
    });
  };


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  
  const formatDateTime = (date) => {
    return format(date, "d MMM'yy h:mm a", { locale: enUS });
  };

  return (
    <>
      <Header />
      <section className='container-fluid create-challenges-container p-0'>
        <div className='top-heading-container p-0'>
          <div className='container'>
            <h1>Update Challenge Details</h1>
          </div>
        </div>
        <div className='challenge-info-container'>
          <div className='container'>
            <div className='col-6'>
              <h1>Challenge Name</h1>
              <input
                type="text"
                placeholder="Enter challenge name"
                value={challengeName}
                onChange={(e) => setChallengeName(e.target.value)} 
              />
            </div>
            <div className='col-6'>
              <h1>Start Date & Time</h1>
              <div className="date-picker-container">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="date-picker"
                  dateFormat="yyyy/MM/dd h:mm aa"
                  showTimeSelect
                  timeIntervals={10}
                  timeCaption="Time"
                  placeholderText="Select start date and time"
                />
                <img src={calendar} alt="Calendar" className="calendar-icon" />
              </div>
            </div>
            <div className='col-6'>
              <h1>End Date & Time</h1>
              <div className="date-picker-container">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="date-picker"
                  dateFormat="yyyy/MM/dd h:mm aa"
                  showTimeSelect
                  timeIntervals={15}
                  timeCaption="Time"
                  placeholderText="Select end date and time"
                />
                <img src={calendar} alt="Calendar" className="calendar-icon" />
              </div>
            </div>
            <div className='col-8'>
              <h1>Description</h1>
              <textarea
                placeholder="Enter detailed description here"
                rows="8"
                className="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
              />
            </div>
            <div className="col-2">
              <h1>Images</h1>
              <div className="image-upload-container">
                {imagePreview ? (
                  <div className="image-card">
                    <img src={imagePreview} alt="Preview" className="image-preview" />
                    <button className="change-image-btn">
                      <label htmlFor="file-input-2">Change Image</label>
                    </button>
                    <input
                      id="file-input-2"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ display: 'none' }}
                    />
                  </div>
                ) : (
                  <div className="image-upload-btn">
                    <label htmlFor="file-input-2">
                      <span>Upload Image</span>
                    </label>
                    <input
                      id="file-input-2"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ display: 'none' }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className='col-4'>
              <h1>Levels</h1>
              <select className="custom-select" value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <button className='create-challenge-button-2' onClick={handleUpdateChallenge}>
              Update Challenge
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default UpdateSection;
