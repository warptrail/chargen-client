import React, { Component } from 'react';
import MainMenu from '../../components/MainMenu/MainMenu';
import WelcomeBox from '../../components/WelcomeBox/WelcomeBox';

import RosterContext from '../../contexts/RosterContext';

import './HomePage.css';

export default class HomePage extends Component {
  static contextType = RosterContext;

  render() {
    const { hasAuthToken } = this.context;
    return <main>{hasAuthToken ? <MainMenu /> : <WelcomeBox />}</main>;
  }
}
