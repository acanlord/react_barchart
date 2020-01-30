// import React from 'react';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     <body>
      <div className="App">
      <div className="albums">
          <ul className="lines">
            <li className="line l--0">
              <span className="line__label title">
                Duration:
              </span>
            </li>
            <li className="line l--25">
              <span className="line__label">
               15 Minutes
              </span>
            </li>
            <li className="line l--50">
              <span className="line__label">
               30 Minutes
              </span>
            </li>
            <li className="line l--75">
              <span className="line__label">
               45 Minutes
              </span>
            </li>
            <li className="line l--100">
              <span className="line__label">
               60 Minutes
              </span>
            </li>
          </ul>
          <div className="charts">
            <div className="chart chart--dev">
              <span className="chart__title">Metal Albums</span>
              <ul className="chart--horiz">
                <li className="chart__bar album1">
                  <span id="album1" className="chart__label" onClick={this.refreshAlbums} >
                  </span>
                </li>
                <li className="chart__bar album2">
                  {/* <span id="album2" className="chart__label" onClick="refreshAlbums()"> */}
                  <span id="album2" className="chart__label" onClick={this.refreshAlbums}> 
                  </span>
                </li>
                <li className="chart__bar album3">
                  <span id="album3" className="chart__label" onClick={this.refreshAlbums}> 
                  </span>
                </li>
                <li className="chart__bar album4">
                  <span id="album4" className="chart__label" onClick={this.refreshAlbums}> 
                  </span>
                </li>
                <li className="chart__bar album5">
                  <span id="album5" className="chart__label" onClick={this.refreshAlbums}> 
                  </span>
                </li>
                 <li className="chart__bar album6">
                  <span id="album6" className="chart__label" onClick={this.refreshAlbums}> 
                  </span>
                </li>
                 <li className="chart__bar album7">
                  <span id="album7" className="chart__label" onClick={this.refreshAlbums}> 
                  </span>
                </li>
                 <li className="chart__bar album8">
                  <span id="album8" className="chart__label" onClick={this.refreshAlbums}> 
                  </span>
                </li>
                 <li className="chart__bar album9">
                  <span id="album9" className="chart__label" onClick={this.refreshAlbums}> 
                  </span>
                </li>
                 <li className="chart__bar album10">
                  <span id="album10" className="chart__label" onClick={this.refreshAlbums}> 
                  </span>
                </li>
                <li className="chart__bar album11">
                  <span id="album11" className="chart__label" onClick={this.refreshAlbums}> 
                  </span>
                  </li>
                <li className="chart__bar album12">
                  <span id="album12" className="chart__label" onClick={this.refreshAlbums}> 
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <script type="text/javascript" src="metal_bands.json"></script>
        <script src="js/main.js"></script>
  </div>
  </body>
    ); 
  }
}

export default App;
