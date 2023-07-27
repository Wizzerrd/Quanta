document.addEventListener("DOMContentLoaded", ()=> console.log("banana"));

import MyEngine from './scripts/engine.js'
import checkButtonListeners from './scripts/buttons.js';

// TESTING CODE IN MyEngine.checkClick

// TODO: Fix MyEngine.clickStatus and related functions

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