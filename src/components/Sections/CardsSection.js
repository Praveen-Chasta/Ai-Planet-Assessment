import { useRecoilValue } from 'recoil';
import { challengesState, filterState } from '../../recoil/atoms/atoms'; 
import CardImgOne from '../../images/card-img-1.png'; 
import check from '../../images/check.png';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

function CardsSection() {
  const challenges = useRecoilValue(challengesState);
  const filterCriteria = useRecoilValue(filterState);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'Upcoming':
        return 'status-upcoming';
      case 'Past':
        return 'status-past';
      default:
        return '';
    }
  };

  const formatPastDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const formatDoubleDigit = (value) => value.toString().padStart(2, '0');

  const determineChallengeStatus = (startDate, endDate) => {
    const now = new Date();
    if (now > endDate) {
      return 'Past';
    }
    if (now < startDate) {
      return 'Upcoming';
    }
    return 'Active';
  };

  const filteredChallenges = challenges.filter((challenge) => {
    const startDate = new Date(challenge.startDate);
    const endDate = new Date(challenge.endDate);
    const currentStatus = determineChallengeStatus(startDate, endDate);

    if (filterCriteria.status.length > 0 && !filterCriteria.status.includes('All') && !filterCriteria.status.includes(currentStatus)) {
      return false;
    }

    if (filterCriteria.level.length > 0 && !filterCriteria.level.includes(challenge.level)) {
      return false;
    }

    if (filterCriteria.searchTerm && !challenge.name.toLowerCase().includes(filterCriteria.searchTerm.toLowerCase())) {
      return false;
    }

    return true;
  });

  return (
    <section className="card-section">
      <div className="container">
        <div className="row justify-content-around">
          {filteredChallenges.map((challenge) => {
            const startDate = new Date(challenge.startDate);
            const endDate = new Date(challenge.endDate);
            const currentStatus = determineChallengeStatus(startDate, endDate);

            let countdown;
            let statusText;

            if (currentStatus === 'Active') {
              countdown = (
                <Countdown 
                  date={endDate} 
                  renderer={({ days, hours, minutes }) => (
                    <div className="countdown-timer">
                      <div className="time-unit">
                        <span className="time-value">{formatDoubleDigit(days)}</span>
                        <span className="time-label">Days</span>
                      </div>
                      <span className="separator">:</span>
                      <div className="time-unit">
                        <span className="time-value">{formatDoubleDigit(hours)}</span>
                        <span className="time-label">Hours</span>
                      </div>
                      <span className="separator">:</span>
                      <div className="time-unit">
                        <span className="time-value">{formatDoubleDigit(minutes)}</span>
                        <span className="time-label">Min</span>
                      </div>
                    </div>
                  )}
                />
              );
              statusText = 'Ends in';
            } else if (currentStatus === 'Upcoming') {
              countdown = (
                <Countdown 
                  date={startDate} 
                  renderer={({ days, hours, minutes }) => (
                    <div className="countdown-timer">
                      <div className="time-unit">
                        <span className="time-value">{formatDoubleDigit(days)}</span>
                        <span className="time-label">Days</span>
                      </div>
                      <span className="separator">:</span>
                      <div className="time-unit">
                        <span className="time-value">{formatDoubleDigit(hours)}</span>
                        <span className="time-label">Hours</span>
                      </div>
                      <span className="separator">:</span>
                      <div className="time-unit">
                        <span className="time-value">{formatDoubleDigit(minutes)}</span>
                        <span className="time-label">Min</span>
                      </div>
                    </div>
                  )}
                />
              );
              statusText = 'Starts in';
            } else if (currentStatus === 'Past') {
              countdown = formatPastDate(endDate);
              statusText = 'Ended on';
            }

            const challengeImage = challenge.image ? challenge.image : CardImgOne;

            return (
              <div key={challenge.id} className="col-lg-3 col-md-6 col-sm-12 upcoming-challenge text-center ms-1 mb-5">
                <img src={challengeImage} alt={challenge.name} className="img-fluid card-img" />
                <p className={getStatusClass(currentStatus)}>{currentStatus}</p>
                <h4 className="challenge-title">{challenge.name}</h4>
                <p className="starts-in">{statusText}</p>
                <p className="countdown">{countdown}</p>
                <div className="action-container">
                  <img src={check} alt="check" className="img-fluid check-icon" />
                  <Link to={`/challenge/${challenge.id}`} className="participate-btn">
                    Participate Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CardsSection;
