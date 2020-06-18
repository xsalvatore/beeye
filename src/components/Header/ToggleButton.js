import React from 'react';
import ToggleIcon from '../../assets/toggle-icon.svg';

const ToggleButton = () => {
  return (
    <div className='toggle-button'>
      <button>
        <img src={ToggleIcon} alt='' />
        <span>Personnaliser</span>
      </button>
    </div>
  );
};

export default ToggleButton;
