// Now just figure out how to have metronome that counts beats and beats subdivide time. then 4 beats = measure etc. 


var beat;
var sliderRate;
var sliderPan;
var jumpButton;

function setup() {
  createCanvas(200, 200);
  beat = loadSound("bad.wav", loaded);
  sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);

  beat.addCue(2, changeBackground, color(0,0,255));
  beat.addCue(4, changeBackground, color(0,255,255));
}

function changeBackground(col) {//col references color in add cue 
  background (col);
}

function loaded() {
  console.log("loaded");
}

function togglePlaying() {
  if (!beat.isPlaying()) {
    beat.play();
    beat.setVolume(0.5);
    button.html("stop");
  } else {
    beat.stop();
    button.html("play");
  }
}

function jumpSong() {
  var len = beat.duration();
  var t= 0;
  //var t = random(len);
  console.log(t);
  beat.jump(t);
  // beat.jump(len / 2);
  //beat.jump(20);
  //beat.jump(random(len));
}

function draw() {
  //background(song.currentTime() *50,0,255);
  //if (beat.currentTime() >5) {
  //background(255,0,255);
  beat.pan(sliderPan.value());
  beat.rate(sliderRate.value());
}
