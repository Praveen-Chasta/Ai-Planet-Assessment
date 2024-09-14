import { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { filterState } from '../../recoil/atoms/atoms';
import searchImg from '../../images/carbon-search.png';
import arrowUpImg from '../../images/arrow-up.png';
import arrowDownImg from '../../images/arrow-down.png';
import crossIcon from '../../images/cross-circle.png';  

const FilterSection = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useRecoilState(filterState);
  const [searchTerm, setSearchTerm] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);

  const debounce = (func, delay) => {
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const id = setTimeout(() => func(...args), delay);
      setTimeoutId(id);
    };
  };

  const updateSearchTerm = useCallback(
    debounce((value) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        searchTerm: value,
      }));
    }, 500),
    [timeoutId]
  );

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    updateSearchTerm(value);
  };

  const toggleFilter = () => {
    setIsFilterOpen((prevState) => !prevState);
  };

  const handleStatusChange = (event) => {
    const { name, checked } = event.target;
    let updatedStatus = [...filters.status];

    if (name === 'All') {
      updatedStatus = checked ? ['All'] : [];
    } else {
      if (checked) {
        if (!updatedStatus.includes(name) && !updatedStatus.includes('All')) {
          updatedStatus.push(name);
        }
      } else {
        updatedStatus = updatedStatus.filter((status) => status !== name);
        if (updatedStatus.length > 0 && updatedStatus.includes('All')) {
          updatedStatus = updatedStatus.filter((status) => status !== 'All');
        }
      }
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: updatedStatus,
    }));
  };

  const handleLevelChange = (event) => {
    const { name, checked } = event.target;
    let updatedLevel = [...filters.level];

    if (checked) {
      if (!updatedLevel.includes(name)) {
        updatedLevel.push(name);
      }
    } else {
      updatedLevel = updatedLevel.filter((level) => level !== name);
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      level: updatedLevel,
    }));
  };

  const removeFilter = (filterType, filterName) => {
    setFilters((prevFilters) => {
      let updatedFilters;
      if (filterType === 'status') {
        updatedFilters = prevFilters.status.filter((status) => status !== filterName);
      } else {
        updatedFilters = prevFilters.level.filter((level) => level !== filterName);
      }

      return {
        ...prevFilters,
        [filterType]: updatedFilters,
      };
    });
  };

  return (
    <section className='filter-section d-flex align-items-center justify-content-center'>
      <div className='container'>
        <div className='col-12 d-flex flex-column align-items-center'>
          <h1>Explore Challenges</h1>
          <div className='row w-100'>
            <div className='col-md-8'>
              <div className='search-container d-flex align-items-center'>
                <img src={searchImg} alt="Search Icon" />
                <input 
                  type="search" 
                  placeholder="Search" 
                  className='search-input' 
                  value={searchTerm} 
                  onChange={handleSearchChange} 
                />
              </div>

      
              <div className="selected-filters mt-3">
                {filters.status.map((status) => (
                  <div key={status} className="selected-filter">
                    <span>{status}</span>
                    <img 
                      src={crossIcon} 
                      alt="Remove" 
                      onClick={() => removeFilter('status', status)} 
                      className="remove-icon" 
                    />
                  </div>
                ))}
                {filters.level.map((level) => (
                  <div key={level} className="selected-filter">
                    <span>{level}</span>
                    <img 
                      src={crossIcon} 
                      alt="Remove" 
                      onClick={() => removeFilter('level', level)} 
                      className="remove-icon" 
                    />
                  </div>
                ))}
              </div>
            </div>
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
                      <input
                        type="checkbox"
                        name="All"
                        checked={filters.status.includes('All')}
                        onChange={handleStatusChange}
                      /> All
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="Active"
                        checked={filters.status.includes('Active')}
                        onChange={handleStatusChange}
                      /> Active
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="Upcoming"
                        checked={filters.status.includes('Upcoming')}
                        onChange={handleStatusChange}
                      /> Upcoming
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="Past"
                        checked={filters.status.includes('Past')}
                        onChange={handleStatusChange}
                      /> Past
                    </label>
                    <hr />
                    <h5>Levels</h5>
                    <label>
                      <input
                        type="checkbox"
                        name="Easy"
                        checked={filters.level.includes('Easy')}
                        onChange={handleLevelChange}
                      /> Easy
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="Medium"
                        checked={filters.level.includes('Medium')}
                        onChange={handleLevelChange}
                      /> Medium
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="Hard"
                        checked={filters.level.includes('Hard')}
                        onChange={handleLevelChange}
                      /> Hard
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
