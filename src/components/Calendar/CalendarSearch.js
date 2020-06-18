import React from 'react';
import SearchIconDark from '../../assets/search-icon-dark.svg';

const CalendarSearch = () => {
  return (
    <div className='calendar-search'>
      <div className='input-group'>
        <img className='icon' src={SearchIconDark} alt='' />
        <input type='text' placeholder='Rechercher' />
      </div>
    </div>
  );
};

export default CalendarSearch;
