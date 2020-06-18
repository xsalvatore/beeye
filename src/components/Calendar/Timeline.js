import React from 'react';

const Timeline = () => {
  return (
    <div className='timeline'>
      <div className='month'>JANVIER</div>

      <div className='week'>
        <div className='day'>
          <span>LUNDI</span>
          <span>01</span>
        </div>

        <div className='day'>
          <span>MARDI</span>
          <span>02</span>
        </div>

        <div className='day'>
          <span>MERCREDI</span>
          <span>03</span>
        </div>

        <div className='day'>
          <span>JEUDI</span>
          <span>04</span>
        </div>

        <div className='day'>
          <span>VENDREDI</span>
          <span>05</span>
        </div>

        <div className='day'>
          <span>SAMEDI</span>
          <span>06</span>
        </div>

        <div className='day'>
          <span>DIMANCHE</span>
          <span>07</span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
