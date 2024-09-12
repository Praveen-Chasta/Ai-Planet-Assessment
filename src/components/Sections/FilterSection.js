import { useState } from 'react';
import searchImg from '../../images/carbon-search.png';
import arrowUpImg from '../../images/arrow-up.png';
import arrowDownImg from '../../images/arrow-down.png';

const FilterSection = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Toggle filter section visibility
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <section className='filter-section d-flex align-items-center justify-content-center'>
      <div className='container'>
        <div className='col-12 d-flex flex-column align-items-center'>
          <h1>Explore Challenges</h1>
          <div className='row w-100'>
            {/* Search Container */}
            <div className='col-md-8'>
              <div className='search-container d-flex align-items-center'>
                <img src={searchImg} alt="Search Icon" />
                <input type="search" placeholder="Search" className='search-input' />
              </div>
            </div>
            {/* Filter Container */}
            <div className='col-md-4'>
              <div className={`filter-container ${isFilterOpen ? 'expanded' : ''}`}>
                <div className='filter-header' onClick={toggleFilter}>
                  <h2>Filter</h2>
                  <span className={`filter-arrow ${isFilterOpen ? 'open' : ''}`}>
                    <img src={isFilterOpen ? arrowUpImg : arrowDownImg} alt="Toggle Arrow" />
                  </span>
                </div>
                {isFilterOpen && (
                  <div className='filter-options'>
                    <hr />
                    <h5>Status</h5>
                    <label>
                      <input type="checkbox" name="option1" /> Option 1
                    </label>
                    <label>
                      <input type="checkbox" name="option2" /> Option 2
                    </label>
                    <label>
                      <input type="checkbox" name="option3" /> Option 3
                    </label>
                    <hr />
                    <h5>Levels</h5>
                    <label>
                      <input type="checkbox" name="option4" /> Option 4
                    </label>
                    <label>
                      <input type="checkbox" name="option5" /> Option 5
                    </label>
                    <label>
                      <input type="checkbox" name="option6" /> Option 6
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
