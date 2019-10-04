import React from 'react';

import './App.css';

import logo from './assets/logo.svg';

import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCNC"/>

      <div className="content">
        <Routes />
      </div>
      <footer className="rodape">
        <p>by <strong>Diego Batista</strong> with Rocketseat OmniStack 9.0</p>
      </footer>
    </div>    
  );
}

export default App;
