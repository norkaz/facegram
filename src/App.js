import React, { Component, Fragment } from 'react';
import {NavMenu} from './components/nav-menu/NavMenu';
import {Header} from './components/header/Header';
import './App.scss';
import './style/setup.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
          <NavMenu/>
          <Header/>
      </Fragment>
    );
  }
}

export default App;
