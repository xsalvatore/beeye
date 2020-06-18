import React from 'react';

import CalendarNavigation from './CalendarNavigation';
import LatePanel from './LatePanel';
import TicketsProgressView from './TicketsProgressView';

const Calendar = () => {
  return (
    <div className='calendar'>
      <CalendarNavigation />
      <div className='calendar-body'>
        <LatePanel />
        <TicketsProgressView />
      </div>
    </div>
  );
};

export default Calendar;
