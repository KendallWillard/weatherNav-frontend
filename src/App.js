import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>weatherNAV</h1>
    <Map
     google={this.props.google}
     center={{lat: 39.7392, lng: -104.9903}}
     height='300px'
     zoom={15}
    />
      </div>
    );
  }
}

export default App;
