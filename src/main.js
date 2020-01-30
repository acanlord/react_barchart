console.log(data.metalalbums[0]);
var i;
for (i = 0; i < 12; i++) {
  var duration = data.metalalbums[i].Minutes;
  // var album = data.metalalbums[i].Album;
  // Get Random Item from Array
  var album = data.metalalbums[Math.floor(Math.random()*data.metalalbums.length)].Album;
  
  var divElement = document.getElementsByClassName("album"+ (i+1))[0];
  console.log(duration, album);
  var albumbutton = document.getElementById("album" + (i + 1));
  albumbutton.innerHTML = album;
  // 60 minutes = 100%
  // duration / 60 + 100 --> percentage
  var percentage = (duration / 60) * 100; 
//   var divHeight = duration * 10;
  divElement.style.width = percentage + "%";
} 


refreshAlbums = () => {

  console.log("refreshing Albums!!");
  var i;
  for (i = 0; i < 12; i++) {
    var duration = data.metalalbums[i].Minutes;
    var album = data.metalalbums[Math.floor(Math.random()*data.metalalbums.length)].Album;
    
    var divElement = document.getElementsByClassName("album"+ (i+1))[0];
    console.log(duration, album);
    var albumbutton = document.getElementById("album" + (i + 1));
    albumbutton.innerHTML = album;
    // 60 minutes = 100%
    // duration / 60 + 100 --> percentage
    var percentage = (duration / 60) * 100; 
  //   var divHeight = duration * 10;
    divElement.style.width = percentage + "%";
  }; 

};