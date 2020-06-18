import React from 'react';

import Branding from './Branding';
import ButtonBar from './ButtonBar';
import AddButton from './AddButton';
import IconBar from './IconBar';
import Avatar from './Avatar';

const NavigationBar = () => {
  return (
    <div className='navigation-bar'>
      <div className='branding-and-button'>
        <Branding />
        <ButtonBar />
      </div>

      <div className='buttons-and-icons'>
        <AddButton />
        <IconBar />
        <Avatar />
      </div>
    </div>
  );
};

export default NavigationBar;
