var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var keyC = createSprite(80,  204,30,150);
keyC.shapeColor="white";
var keyD = createSprite(120, 204,30,150);
keyD.shapeColor="white";
var keyE = createSprite(160, 204,30,150);
keyE.shapeColor="white";
var keyF = createSprite(195, 204,30,150);
keyF.shapeColor="white";
var keyG = createSprite(240, 204,30,150);
keyG.shapeColor="white";
var keyA = createSprite(280, 204,30,150);
keyA.shapeColor="white";
var keyB = createSprite(320, 204,30,150);
keyB.shapeColor="white";

var keyCb = createSprite(96,156,40,60);
var keyDb = createSprite(146,156,40,60);
var keyFb = createSprite(210,156,40,60);
var keyGb = createSprite(260,156,40,60);
var keyAb = createSprite(305, 156,40,60);

function draw() 
{
background("orange");

text("keyCb",85,115);
text("keyDb",140,115);
text("keyFb",190,115);
text("keyGb",250,115);
text("keyAb",290,115);


text("keyC",65,292);
text("keyD",113,292);
text("keyE",156,292);
text("keyF",190,292);
text("keyG",230,292);
text("keyA",270,292);
text("keyB",310,292);

  if (keyDown("a")||keyDown("1")||keyDown("D")){
    playSound("assets/piano_D_sharp.mp3");
    keyD.shapeColor = "yellow";
    
  }
  
  if (keyDown("space")||keyDown("C")||keyDown("5")){
     playSound("assets/piano_middle_C.mp3");
     keyC.shapeColor = "yellow";
  }
   if (keyDown("t")||keyDown("4")||keyDown("A")){
     playSound("assets/piano_A_sharp.mp3");
     keyA.shapeColor = "yellow";
   }
  if (keyDown("h")||keyDown("9")||keyDown("E")){
     playSound("assets/piano_E.mp3");
     keyE.shapeColor = "yellow";
  }
  if (keyDown("j")||keyDown("0")||keyDown("B")){
     playSound("assets/piano_B.mp3");
     keyB.shapeColor = "yellow";
  }
  if (keyDown("o")||keyDown("2")||keyDown("F")){
     playSound("assets/piano_F_sharp.mp3");
     keyF.shapeColor = "yellow";
  }
  if (keyDown("p")||keyDown("00")||keyDown("G")){
     playSound("assets/the .mp3");
     keyF.shapeColor = "yellow";
  }
  if (keyDown("e")||keyDown("6")||keyDown("Cb")) {
     playSound("assets/ss.mp3");
     keyCb.shapeColor = "green";
  }
  if (keyDown("r")||keyDown("1")||keyDown("Db")){
     playSound("assets/v.mp3");
     keyDb.shapeColor = "green";
  }
  if (keyDown("q")||keyDown("90")||keyDown("Fb")) {
      playSound("assets/46.mp3");
      keyFb.shapeColor = "green";
  }
  if (keyDown("w"||"7"||"Gb")){
      playSound("assets/1.mp3");
      keyGb.shapeColor = "green"; 
  }
  if (keyDown("s"||"8"||"Ab")){
      playSound("assets/harmonium1.mp3");
     keyAb.shapeColor = "green";
  }
  drawSprites();
  }
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
