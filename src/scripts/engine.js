import * as Matter from 'matter-js'; // gotta import the files !!!
import * as MatterWrap from 'matter-wrap';
import Ball from './ball';

// Matter.use(MatterWrap);

var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Collision = Matter.Collision,
    Mouse = Matter.Mouse,
    Body = Matter.Body,
    Runner = Matter.Runner;

var sim = document.getElementById('matter')

class MyEngine{

    constructor(){
        this.engine = this.createEngine();
        this.render = this.createRender(this.engine);
        this.runner = Runner.create();

        this.bounds = this.createBounds();
        Composite.add(this.engine.world, this.bounds);

        this.mouse = Mouse.create(this.render.canvas);

        this.classes = [];
        this.running = false;
        this.wrapStatus = false;
        this.clickStatus = 0;
        this.clickMag;
    }

    // Engine creation and running functions
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
                height: window.innerHeight * 0.99,
                wireframes: false,
                background: 'lightgray',
            }
        });
    }

    runEngine(){ // need to fix
        Render.run(this.render);
        Runner.run(this.runner, this.engine);
    }

    stopEngine(){
        Runner.stop(this.runner, this.engine);
    }

    playPause(){
        var playPause = document.getElementById('play-pause')
        var playText = document.getElementById('play-text')

        playPause.addEventListener('mousedown', ()=>{
            if(this.engine.running){
                this.engine.running = false;
                this.stopEngine();
                playPause.innerHTML = "PLAY SIMULATION"
            } else {
                this.engine.running = true;
                this.runEngine();
                playPause.innerHTML = "PAUSE SIMULATION"
                playText.innerHTML= ""
            }
        })
    }

    // Boundary Functions
    createBounds(){
        var ground = Bodies.rectangle(this.render.options.width / 2, this.render.options.height + 2490, this.render.options.width * 2, 5000, { isStatic: true });
        var leftBound = Bodies.rectangle(-2490, this.render.options.height / 2, 5000, this.render.options.height, { isStatic: true });
        var rightBound = Bodies.rectangle(this.render.options.width + 2490, this.render.options.height / 2, 5000, this.render.options.height, { isStatic: true });
        var roof = Bodies.rectangle(this.render.options.width / 2, -2490, this.render.options.width * 2, 5000, { isStatic: true });

        return [ground, leftBound, rightBound, roof]
    }

    checkBounds(){
        var boundTog = document.getElementById('boundary-toggle');
        var boundBool = true;

        boundTog.addEventListener('mousedown',()=>{
            if(boundBool){
                boundBool = false;
                boundTog.innerHTML = "WRAP";
                Composite.remove(this.engine.world, this.bounds)
            } else {
                boundBool = true;
                boundTog.innerHTML = "FIXED";
                Composite.add(this.engine.world, this.bounds)
            }
        })
    }

    // Mouse Input
    checkClick(){
        var clickButton = document.getElementById('click-button');
        clickButton.addEventListener('click', ()=>{
            if (this.clickStatus === 0){
                this.clickStatus++;
                clickButton.innerHTML = 'PUSH';
            } else if (this.clickStatus === 1){
                this.clickStatus++;
                clickButton.innerHTML = 'PULL';
            } else {
                this.clickStatus = 0;
                clickButton.innerHTML = 'OFF';
            }
        })

        sim.addEventListener('mousedown', ()=>{
            let mouseX = this.mouse.position.x
            let mouseY = this.mouse.position.y
            let pos = {x: mouseX, y: mouseY}
            let clickVect = function(ball, ctx){
                return {x: ctx.clickMag * (mouseX - ball.position.x), y: ctx.clickMag * (mouseY - ball.position.y)};
            }

            this.engine.world.bodies.forEach((ball)=>{
                Body.applyForce(ball, pos, clickVect(ball, this));
            })
        })
    }

    // Reset Button
    checkReset(){
        var resetButton = document.getElementById('reset-button')
        var list = document.getElementById('ball-list')
        resetButton.addEventListener('mousedown',()=>{
            // this.stopEngine();
            while(list.firstChild){
                list.removeChild(list.firstChild);
            }
            this.classes.forEach((ballClass)=>{
                Composite.remove(this.engine.world, ballClass.bodies)
            })
            this.classes = [];
            // this.runEngine();
        })
    }

    // Particle Creation
    checkNewBall(){
        var newBall = document.getElementById('new-ball')
        var popCount = document.getElementById('pop-counter')

        newBall.addEventListener('mousedown', ()=>{
            if(!this.engine.running){
                var ball = new Ball(this.render, popCount.value)
                Composite.add(this.engine.world, ball.bodies)
                this.classes.push(ball)
                this.classes.forEach((ballClass)=>{
                    ballClass.friends.push(
                        {ref: ball,
                            attraction: 0,
                            interaction: 0}
                    )
                })
                this.createBallDivs(this)
            }
        })
    }

    createBallDivs(myEngine){
        function createSettingDiv(thisBall, thatBall){
            var settingDiv = document.createElement('div');
            settingDiv.innerHTML = `${thisBall.color}`;
            settingDiv.id = `${thatBall.color}-${thisBall.color}`;

            var sliderEle = document.createElement('input');
            sliderEle.type = 'range';
            sliderEle.max = 1;
            sliderEle.min = -1;
            sliderEle.value = 0;
            sliderEle.step = 0.01;

            let options = ['ON','OFF','CREATE','DESTROY'];
            var collisionTog = document.createElement('select');
            collisionTog.id = `${thatBall.color}-${thisBall.color}-interaction`;

            for(let i = 0; i < options.length; i++){
                var option = document.createElement('option');
                option.value = i;
                option.text = options[i];
                collisionTog.appendChild(option);
            }

            var created = document.createElement('select');
            created.id = `${thatBall.color}-${thisBall.color}-creation`;
            // created.style.display = 'none'
            myEngine.classes.forEach((ballClass)=>{
                var option = document.createElement('option');
                option.value = ballClass.color;
                option.text = ballClass.color;
                created.appendChild(option);
            })

            settingDiv.appendChild(sliderEle);
            settingDiv.appendChild(collisionTog);
            settingDiv.appendChild(created);
            return settingDiv
        }

        var list = document.getElementById('ball-list')
        while(list.firstChild){
            list.removeChild(list.firstChild);
        }

        this.classes.forEach((ballClass)=>{
            var newDiv = document.createElement('div')
            newDiv.innerHTML = `${ballClass.color}`
            newDiv.id = `${ballClass.color}`
            newDiv.className = `ball-div`
            newDiv.style.backgroundColor = ballClass.color;
            this.classes.forEach((friendClass)=>{
                var settingDiv = createSettingDiv(friendClass, ballClass);
                newDiv.appendChild(settingDiv);
            })
            list.appendChild(newDiv)
        })
    }

    gravVect = function(ball1, ball2, attractionMult){
        let deltX = ball2.position.x - ball1.position.x;
        let deltY = ball2.position.y - ball1.position.y;
        let distanceSq = deltX ** 2 + deltY ** 2;
    
        if(distanceSq === 0){
            return {x: 0, y: 0};
        }
    
        const forceMag = attractionMult * 0.1 / distanceSq;
        return {x: forceMag * deltX, y: forceMag * deltY};

        // formula for universally constant attractive force
        // return {x: (gravMult * (ball2.position.x - ball1.position.x)), 
        // y: (gravMult * (ball2.position.y - ball1.position.y))};
    }
    
    applyGrav = function(ballClass, friendObj){
        if(friendObj.attraction !== 0){
            ballClass.bodies.forEach((ball1)=>{
                friendObj.ref.bodies.forEach((ball2)=>{
                    ball1.gravVect = this.gravVect(ball1, ball2, friendObj.attraction);
                    ball2.gravVect = this.gravVect(ball2, ball1, friendObj.attraction);
                    Body.applyForce(ball1, ball1.position, ball1.gravVect);
                    Body.applyForce(ball2, ball2.position, ball2.gravVect);
                })
            })
        }
    }

    // Engine checking function
    checkBeforeUpdate(){


        var clickMagSlider = document.getElementById('click-mag-slider');

        var xMagSlider = document.getElementById('x-mag-slider');
        var yMagSlider = document.getElementById('y-mag-slider');
        var xMagLabel = document.getElementById('x-mag-value');
        var yMagLabel = document.getElementById('y-mag-value');

        var gravTog = document.getElementById('gravity-toggle');
        var gravBool;
        var gravMult = 0.05;

        
        Events.on(this.engine, 'beforeUpdate', ()=>{

            let ballDivs = document.querySelectorAll('.ball-div')
            ballDivs.forEach((ballDiv)=>{

            })

            // set clickMult
            var clickMult = Number(clickMagSlider.value);

            if(this.clickStatus === 0){
                this.clickMag = 0;
            } else if (this.clickStatus === 1){
                this.clickMag = -0.000005 * clickMult
            } else {
                this.clickMag = 0.000005 * clickMult
            }

            // handle universal gravity
            xMagLabel.innerHTML = xMagSlider.value;
            this.engine.gravity.x = Number(xMagSlider.value * gravMult)
            
            yMagLabel.innerHTML = yMagSlider.value;
            this.engine.gravity.y = Number(yMagSlider.value * gravMult)

            if(gravTog.innerHTML === "ON"){
                gravBool = true;
            } else {
                gravBool = false;
            }

            if (gravBool){
                this.engine.gravity.scale = 1
            } else {
                this.engine.gravity.scale = 0
            }
            
            // interaction & attraction //
            this.classes.forEach((ballClass)=>{
                ballClass.friends.forEach((friendObj)=>{

                    // interaction
                    let interactionEle = document.getElementById(`${ballClass.color}-${friendObj.ref.color}-interaction`);
                    friendObj.interaction = Number(interactionEle.value)
                    for(let i = 0; i < ballClass.bodies.length; i++){
                        for(let j = i + 1; j < friendObj.ref.bodies.length; j++){
                            let ball1 = ballClass.bodies[i];
                            let ball2 = friendObj.ref.bodies[j];
                            let collision = Collision.collides(ball1, ball2)
                            if(collision){
                                if(friendObj.interaction === 1){ // off

                                } else if(friendObj.interaction === 3){ // destroy
                                    ballClass.bodies[i].setRemove = true;
                                } else if(friendObj.interaction === 2){ // create
                                    let element = document.getElementById(`${ballClass.color}-${friendObj.ref.color}-creation`);
                                    console.log(element);
                                    let newBallClass; 
                                    this.classes.forEach((ballClass)=>{
                                        if(ballClass.color === element.value){
                                            newBallClass = ballClass;
                                        }
                                    });
                                    console.log(this.classes)
                                    let newBall = newBallClass.createBall();
                                    ballClass.bodies.push(newBall);
                                    Composite.add(this.engine.world, newBall);
                                } else { // on

                                }
                            }
                        }
                    }

                    // handle deletion
                    this.classes.forEach((ballClass)=>{
                        ballClass.bodies.forEach((body)=>{
                            if(body.setRemove){
                                ballClass.removeBody(body);
                                Composite.remove(this.engine.world, body);
                            }
                        })
                    })

                    // handle attraction with math in helper function
                    var element = document.getElementById(`${ballClass.color}-${friendObj.ref.color}`)
                    var slider = element.querySelector('input[type=range]')
                    friendObj.attraction = Number(slider.value);
                    this.applyGrav(ballClass, friendObj);
                }) 
            })
            // end mega function //

        })
    }
}

export default MyEngine;

