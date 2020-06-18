import React from 'react';

import NavigationBar from './components/Navigation/NavigationBar';
import Header from './components/Header/Header';
import Calendar from './components/Calendar/Calendar';

const App = () => {
  return (
    <div className='app'>
      <NavigationBar />
      <Header />
      <Calendar />
    </div>
  );
};

export default App;
