import React from 'react';
import CalendarIcon from '../../assets/calendar-icon.svg';

const DropdownView = () => {
  return (
    <div className='dropdown-view'>
      <button>
        <img src={CalendarIcon} alt='' />
        <span>Semaine</span>
        <i className='fa fa-chevron-down'></i>
      </button>
    </div>
  );
};

export default DropdownView;
