// document.addEventListener("DOMContentLoaded", ()=> console.log("banana"));

import MyEngine from './scripts/engine.js'
import checkButtonListeners from './scripts/buttons.js';

// create matter-js engine
var myEngine = new MyEngine()

// Button Event Listeners
checkButtonListeners();

myEngine.playPause();

// run engine and check between updates
myEngine.runEngine();
myEngine.stopEngine();

myEngine.checkBounds();
myEngine.checkClick();
myEngine.checkNewBall();
myEngine.checkReset();

myEngine.checkBeforeUpdate();