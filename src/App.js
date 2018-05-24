import React, { Component } from 'react';
import './style.css';
import NavBar from './navbar/NavBar';
import Page from './page/Page';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="background"></div>
        <NavBar/>
          <Page/>
      </div>
    );
  }
}

export default App;
