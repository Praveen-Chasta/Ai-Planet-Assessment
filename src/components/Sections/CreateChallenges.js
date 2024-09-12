import { useState } from 'react';
import Header from '../Header/Header';
import DatePicker from 'react-datepicker';
import calendar from '../../images/calender.png';
import 'react-datepicker/dist/react-datepicker.css'; 

function CreateChallenges() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
              <input type="text" placeholder="Enter challenge name" />
            </div>
            <div className='col-6'>
              <h1>Start Date</h1>
              <div className="date-picker-container">
                <DatePicker
                  onChange={(date) => setStartDate(date)}
                  className="date-picker"
                  dateFormat="yyyy/MM/dd"
                  placeholderText="Select start date"
                />
                <img src={calendar} alt="Calendar" className="calendar-icon" />
              </div>
            </div>
            <div className='col-6'>
              <h1>End Date</h1>
              <div className="date-picker-container">
                <DatePicker
                  onChange={(date) => setEndDate(date)}
                  className="date-picker"
                  dateFormat="yyyy/MM/dd"
                  placeholderText="Select end date"
                />
                <img src={calendar} alt="Calendar" className="calendar-icon" />
              </div>
            </div>
            <div className='col-8'>
                <h1>Description</h1>
                <textarea placeholder="Enter detailed description here" rows="8"  className="textarea"/>
            </div>
            <div className='col-2'>
                <h1>Images</h1>
                <input type="file" accept="image/*" multiple className="image-uploader" />
            </div>
            <div className='col-4'>
                <h1>Levels</h1>
                <select className="custom-select">
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
            </div>
            <button className='create-challenge-button-2'>Create Challenge</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateChallenges;
