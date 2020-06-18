import React from 'react';

import CalendarSearch from './CalendarSearch';
import Timeline from './Timeline';

const CalendarNavigation = () => {
  return (
    <div className='calendar-navigation'>
      <CalendarSearch />
      <Timeline />
    </div>
  );
};

export default CalendarNavigation;
