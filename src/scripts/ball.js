import * as Matter from 'matter-js'
import * as MatterWrap from 'matter-wrap'

Matter.use(MatterWrap)

var Bodies = Matter.Bodies;



class Ball{

    randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    
    
    constructor(render, pop){
        this.color = this.randomColor()
        this.render = render;
        this.pop = pop;
        this.bodies = this.populate();
        this.friends = [{
            ref: this,
            attraction: 0,
            interaction: 1
        }]
    }

    createBall(){
        return Bodies.circle(Math.random() * this.render.options.width, Math.random() * this.render.options.height , 5, {
            plugin: {
                wrap: { //matter-wrap plugin code. Very easy to apply!
                    min: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: this.render.options.width,
                        y: this.render.options.height
                    }
                }
            },
            render: {
                fillStyle: this.color
            },
            frictionAir: 0,
            friction: 0
        });
    }

    populate(){
        let bodies = [];
        while(bodies.length < this.pop){
            bodies.push(this.createBall())
        }
        return bodies;
    }

    removeBody(body){
        for(let i = 0; i < this.bodies.length; i++){
            if (this.bodies[i] === body){
                this.bodies.splice(i,1)
            }
        }
    }
}

export default Ball;