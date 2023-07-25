import * as Matter from 'matter-js'; // gotta import the files !!!
import * as MatterWrap from 'matter-wrap';

// Matter.use(MatterWrap);

var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner;

var sim = document.getElementById('matter')

class MyEngine{
    createEngine(){
        return Engine.create({
            gravity: {
                scale: 0,
                x: 0,
                y: 0
            }
        })
    }

    createRender(engine){
        return Render.create({
            element: sim,
            engine: engine,
            options: {
                width: window.innerWidth * 0.8,
                height: window.innerHeight * 0.9,
                wireframes: false,
                background: 'lightgray',
            }
        });
    }

    runEngine(engine, render){
        var runner = Runner.create();
        Render.run(render);
        Runner.run(runner,engine);
    }

}

export default MyEngine;

