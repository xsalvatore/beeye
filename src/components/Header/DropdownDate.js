import React from 'react';

import CalendarIcon from '../../assets/calendar-icon.svg';

const DropdownDate = () => {
  return (
    <div className='dropdown-date'>
      <button>
        <img src={CalendarIcon} alt='' />
        <span>Lundi 07 Octobre - Dimanche 13 Octobre</span>
        <i className='fa fa-chevron-down'></i>
      </button>
    </div>
  );
};

export default DropdownDate;
