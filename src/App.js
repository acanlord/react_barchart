// import React from 'react';
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
//import './main.js';
import metalBands from './metal_bands.json';

class App extends Component {

    state = {
      albums: metalBands.metalalbums 
    }

// var i;
// for (i = 0; i < 12; i++) {
//   var duration = data.metalalbums[i].Minutes;
//   // var album = data.metalalbums[i].Album;
//   // Get Random Item from Array
//   var album = data.metalalbums[Math.floor(Math.random()*data.metalalbums.length)].Album;
  
//   var divElement = document.getElementsByClassName("album"+ (i+1))[0];
//   console.log(duration, album);
//   var albumbutton = document.getElementById("album" + (i + 1));
//   albumbutton.innerHTML = album;
//   // 60 minutes = 100%
//   // duration / 60 + 100 --> percentage
//   var percentage = (duration / 60) * 100; 
// //   var divHeight = duration * 10;
//   divElement.style.width = percentage + "%";
// } 



  render() {
    var fullAlbums = this.state.albums;
    var numberOfAlbums = 12;
    var limitedAlbums = fullAlbums.slice(0, numberOfAlbums).map((albumid, i) => {
      // return <li key={i}>{i}: {albumid.Album}</li>
      return (
        <li className="chart__bar album2">
                  <span id="album2" className="chart__label"> 
                  {albumid.Album}
                  </span>
                </li>
      );
  });
    return (
    //  <body>
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
              {limitedAlbums}
              {/* {this.state.albums.map((albumid, index) => (
                <>
              <div>{index}: {albumid.Album}</div>
              <div>{albumid.Duration}</div>
              </>
               ))} */}
                {/* <li className="chart__bar album1">
                  <span id="album1" className="chart__label" onClick={this.refreshAlbums} >
                  </span>
                </li>
                <li className="chart__bar album2">
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
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* <script type="text/javascript" src="metal_bands.json"></script> */}
        {/* <script src="js/main.js"></script> */}
  </div>
  // </body>
    ); 
  }
}

export default App;
