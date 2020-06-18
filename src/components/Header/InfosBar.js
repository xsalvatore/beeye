import React from 'react';

import CurrentDateButton from './CurrentDateButton';
import ArrowButton from './ArrowButton';
import DropdownDate from './DropdownDate';
import DropdownView from './DropdownView';
import SplitButton from './SplitButton';
import ToggleButton from './ToggleButton';
import ConflictButton from './ConflictButton';

const InfosBar = () => {
  return (
    <div className='infos-bar'>
      <div className='dates'>
        <CurrentDateButton />
        <ArrowButton direction='left' />
        <ArrowButton direction='right' />
        <DropdownDate />
        <DropdownView />
        <SplitButton />
      </div>
      <div className='actions'>
        <ConflictButton />
        <ToggleButton />
      </div>
    </div>
  );
};

export default InfosBar;
