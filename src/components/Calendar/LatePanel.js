import React from 'react';

import Avatar from '../../assets/avatar.png';
import WarningIcon from '../../assets/warning-icon.svg';
import HomeIcon from '../../assets/home-icon.svg';
import CommentsIcon from '../../assets/comments-icon.svg';

export const LatePanel = () => {
  return (
    <div className='late-panel'>
      <div className='user'>
        <div className='avatar'>
          <img src={Avatar} alt='' />
        </div>
        <div className='name-and-title'>
          <p className='name'>Nom du collaborateur</p>
          <p className='title'>Poste du collaborateur</p>
        </div>
        <i className='fa fa-chevron-down'></i>
      </div>

      <div className='late-tickets'>
        <div className='warning'>
          <div className='badge'>
            <img src={WarningIcon} alt='' />
            <span>EN RETARD</span>
          </div>
        </div>

        <div className='listing'>
          <div className='ticket'>
            <div className='status-border'></div>

            <div className='date-time'>
              <span className='date'>15 NOV</span>
              <span className='time'>2h</span>
            </div>
            <div className='client'>AIR QUÉBEC</div>
            <div className='title'>Expertise 2019</div>
            <div className='category'>Reporting/Situation</div>
            <div className='location'>
              <img src={HomeIcon} alt='' />
              <span>Domicile</span>
              <img src={CommentsIcon} alt='' />
            </div>
          </div>

          <div className='ticket'>
            <div className='status-border'></div>

            <div className='date-time'>
              <span className='date'>15 NOV</span>
              <span className='time'>2h</span>
            </div>
            <div className='client'>AIR QUÉBEC</div>
            <div className='title'>Expertise 2019</div>
            <div className='category'>Reporting/Situation</div>
            <div className='location'>
              <img src={HomeIcon} alt='' />
              <span>Domicile</span>
              <img src={CommentsIcon} alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='user'>
        <div className='avatar'>
          <img src={Avatar} alt='' />
        </div>

        <div className='name-and-title'>
          <p className='name'>Nom du collaborateur</p>
          <p className='title'>Poste du collaborateur</p>
        </div>
        <i className='fa fa-chevron-down'></i>
      </div>
    </div>
  );
};

export default LatePanel;
