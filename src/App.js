import React from 'react';
import './App.css';

import Dashboard from './components/dashboard';
import NavBar from './components/navbar'

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Dashboard />
      </div>
    )
  }
}

export default App;
