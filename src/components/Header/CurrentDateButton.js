import React from 'react';
import Icon from '../../assets/pin-icon.svg';

const CurrentDateButton = () => {
  return (
    <div className='current-date-button'>
      <button>
        <img src={Icon} alt='' />

        <span>Aujourd'hui</span>
      </button>
    </div>
  );
};

export default CurrentDateButton;
