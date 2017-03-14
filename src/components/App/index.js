import React, { Component } from 'react';
import './index.css';
import Header from '../Header';
import Filter from '../Filter';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
        </div>
    );

  }
}

export default App;
