import React, { Component } from 'react';
import {NavMenu} from './components/navmenu/NavMenu';
import logo from './logo.svg';
import {Header} from './components/header/Header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <NavMenu/>
      </div>
          <Header/>
    );
  }
}

export default App;
