import React from 'react';
import ArrowIcon from '../../assets/arrow-icon.svg';

export const ArrowButton = ({ direction }) => {
  return (
    <div className={`arrow-button ${direction === 'left' ? 'left' : 'right'}`}>
      <button>
        <img src={ArrowIcon} alt='' />
      </button>
    </div>
  );
};

export default ArrowButton;
