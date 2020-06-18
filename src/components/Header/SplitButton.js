import React from 'react';
import SplitIcon from '../../assets/split-icon.svg';

const SplitButton = () => {
  return (
    <div className='split-button'>
      <button>
        <img src={SplitIcon} alt='' />

        <span>Écran Divisé</span>
      </button>
    </div>
  );
};

export default SplitButton;
