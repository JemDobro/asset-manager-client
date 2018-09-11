import React from 'react';

import HeaderBar from './header-bar';
import LandingPage from './landing-page';

export default class App extends React.Component {
  render(){
    return (
      <div className="app">
        <HeaderBar />
        <LandingPage />
      </div>
    );
  }
}