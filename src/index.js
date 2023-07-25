document.addEventListener("DOMContentLoaded", ()=> console.log("banana"));

import { Events } from 'matter-js';
import MyEngine from './scripts/engine.js'

var xMagSlider = document.getElementById('x-mag-slider')
var yMagSlider = document.getElementById('y-mag-slider')
var xMagLabel = document.getElementById('x-mag-value')
var yMagLabel = document.getElementById('y-mag-value')

xMagSlider.addEventListener('change',()=>{
    xMagLabel.innerHTML = xMagSlider.value
})

yMagSlider.addEventListener('change',()=>{
    yMagLabel.innerHTML = yMagSlider.value
})

var gravTog = document.getElementById('gravity-toggle')
var gravBool = false;

gravTog.addEventListener('click', ()=>{
    if(gravBool){
        gravBool = false;
        gravTog.style.backgroundColor = 'red';
        gravTog.innerHTML = 'OFF'
    } else {
        gravBool = true;
        gravTog.style.backgroundColor = 'green';
        gravTog.innerHTML = 'ON'
    }
})

var boundTog = document.getElementById('boundary-toggle');
var boundBool = true;

boundTog.addEventListener('click',()=>{
    if(boundBool){
        boundBool = false;
        boundTog.innerHTML = "WRAP"
    } else {
        boundBool = true;
        boundTog.innerHTML = "FIXED"
    }
})

var myEngine = new MyEngine()

var engine = myEngine.createEngine();
var myRender = myEngine.createRender(engine);
myEngine.runEngine(engine, myRender);

Events.on(engine, 'beforeUpdate', ()=>{

})