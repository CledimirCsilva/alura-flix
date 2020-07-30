import React from 'react';
import './assets/styles/reset.css';

import Navbar from './components/Navbar';
import Logo from './components/Logo';
import NewVideoButton from './components/Button';

function App() {
  return (
    <div>
      <Navbar>
        <Logo />
        <NewVideoButton/>
      </Navbar>
    </div>
  );
}

export default App;
