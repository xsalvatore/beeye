import React from 'react';

import InfosBar from './InfosBar';

const Header = () => {
  return (
    <div className='header'>
      <div className='title'>
        <h1>Mon Planning</h1>
      </div>

      <InfosBar />
    </div>
  );
};

export default Header;
