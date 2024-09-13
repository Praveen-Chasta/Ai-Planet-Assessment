import { useState } from 'react';
import Header from '../Header/Header';
import DatePicker from 'react-datepicker';
import calendar from '../../images/calender.png';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from 'recoil';
import { challengesState } from '../../recoil/atoms/atoms';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

function CreateChallenges() {
  const [challenges, setChallenges] = useRecoilState(challengesState);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [challengeName, setChallengeName] = useState('');
  const [level, setLevel] = useState('Easy');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); 
  const [imagePreview, setImagePreview] = useState(''); 

  const handleCreateChallenge = () => {
    const now = new Date();
    let status = '';

    if (endDate < now) {
      status = 'Past';
    } else if (startDate > now) {
      status = 'Upcoming';
    } else {
      status = 'Active';
    }

    const newChallenge = {
      id: challenges.length + 1,
      name: challengeName,
      startDate,
      endDate,
      level,
      description,
      status,
      image: imagePreview, 
    };


    setChallenges([...challenges, newChallenge]);

   
    setChallengeName('');
    setStartDate(new Date());
    setEndDate(new Date());
    setLevel('Easy');
    setDescription('');
    setSelectedImage(null);
    setImagePreview('');
  };

  console.log(level)

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
            <h1>Challenge Details</h1>
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
              <p>{`Selected Start Date & Time: ${formatDateTime(startDate)}`}</p>
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
              <p>{`Selected End Date & Time: ${formatDateTime(endDate)}`}</p>
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
            <div className='col-2'>
              <h1>Images</h1>
              <input type="file" accept="image/*" className="image-uploader" onChange={handleImageUpload} />
              {imagePreview && (
                <div className="image-preview">
                  <img src={imagePreview} alt="Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />
                </div>
              )}
            </div>
            <div className='col-4'>
              <h1>Levels</h1>
              <select className="custom-select" value={level} onChange={(e) => setLevel(e.target.value)}>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
            <button className='create-challenge-button-2' onClick={handleCreateChallenge}>
              Create Challenge
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateChallenges;
