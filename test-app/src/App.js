import React, { Component } from 'react';
import './App.css';
import Grid from './Grid.js'
import Search from './Input.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <Grid />
      </div>
    );
  }
}

export default App;