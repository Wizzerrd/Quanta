# Emergent Quanta (A particle simulation integrating particle collision, destruction, and creation) #
[Javascript Demo](https://wizzerrd.github.io/Quanta/)

"Complex systems produce surprising behaviour; in fact, they produce behavioral patterns and properties that just cannot be predicted from knowledge of their parts taken in isolation. The appearance of emergent properties is probably the single most distinguishing feature of complex systems. An example of this phenomenon is the Game of Life, a simple board game created in the late 1960s by American mathematician John Conway ... that displays many intriguing examples of emergence. Another example of emergence occurs in the global behaviour of an ant colony." - Encyclopedia Brtiannica

![100part](https://github.com/Wizzerrd/jsProjectLuis/assets/133073175/f5dca454-eef5-46d1-b358-7c1bd610cbb2)

## As with many particle simulations used to demonstrate emergent behavior, this simulation primarily features particles (quanta) that exert attractive/repelling forces (bosons) on one another. ##

The point of a simulation such as this is to show how simple rules can give rise to complex behaviors. Emergent Quanta is a browser-based emergent-behavior particle simulation using the Matter-JS library to simulate the particles as rigid-bodies. Introducting birth and death will allow the simulation to explore concepts of sustainable systems and ecoystems. A fixed number of particles is assigned at the start of the simulation as with most emergent-behavior particle simulations, and the number of particles can fluctuate depending on interactions between existing particles. A user can assign an arbitrary number of types of quanta, whose properties can be assigned.

![start](https://github.com/Wizzerrd/jsProjectLuis/assets/133073175/1c43eb54-29d5-48e0-b405-53e73cc47fae)

The basic properties include attraction and repulsion in relation to other types of quanta, friction*, mass*, and radius*. As well as these basic physical properties the quanta will also have an opportunity to interact with one another upon a collision, absorbing or granting energy in the vector of the collision*, destroying or being destroyed by the collision, or having the ability to birth new quanta of a specified type in the collision. The user will have access to controls for all of these properties as well as global properties like a toggle for boundary-wrapping or fixed directional forces. The simulation renders in an HTML canvas element that is created by the matter-js engine.

## Features and Challenges ##

![running](https://github.com/Wizzerrd/jsProjectLuis/assets/133073175/34858ea1-ea95-485a-ac97-d71ddc2585da)

The primary features of the project, simulation and user input, provided unique challenges and solutions to implment. The matter-js library handles the basics of rigid-body physics like collision and force application, but I had to learn how to apply Javascript libraries to my Javascript projects for this. Node package manager makes the installation and integration relatively straightforward, but actually implementing code using matter-js required a deep dive into the matter-js documentation, and when that proved insufficient a combination of YouTube tutorials and ChatGPT helped guide me in the right direction. After learning how the basics of the library I had to build out my own classes and functions over the matter-js classes to allow for tuning of the engine. My custom engine, or myEngine as it ended up being called, stores the matter-js engine and a variety of settings and booleans to be used in the simulation, such as global gravity and boundary. This allows for a granular control of the matter-js engine both in terms of design as well as on the user's end.

![myEngine](https://github.com/Wizzerrd/jsProjectLuis/assets/133073175/534e71f3-87ed-4f9f-8712-2457a28e2609)

In the simulation, the main physical properties I had to program in were destruction/creation upon collision and particle attraction. Collision was easy enough as matter-js has built in collision handling functions that detect whether or not a collision has occurred between 2 bodies. I just had to check all bodies against eachother, see if they had collided, and check the interaction setting on the parent particle (ball1) of the collision to determine the outcome. Using this I will be able to apply mater-js group/mask rules for collisions in the future. Particle attraction is handled similarly, with each body checking every other body in the simulation and interacting according the attraction rules determined on the particle's class. Gravity was an interesting challenge as I had to break the formula for gravity that I know ( G * m1 * m2 / d ^ 2 ) into vector components to be used by the matter-js Body.applyForce() function. The distance between the points is broken into vector components which are squared individually and stored to use later when the force magnitude is determined.

![gravVect](https://github.com/Wizzerrd/jsProjectLuis/assets/133073175/c4dc6f9e-955c-44eb-9f0c-26608944f605)

Finally, the number of types of particles is arbitrary, so I had to create a menu that would grow arbitrarily with the number of particles. What a I ended up doing was deleting the whole menu each time I create a new particle to recreate all the menus with the new particle included. I feel this approach is a bit sloppy but it gets the job done. In general what happens is each particle type gets its own div into which a set of every particle is put. This allows for a menu in which every particle can interact with every other particle in some way. Each particle-particle interaction is given an HTML element with a unique id derived from the hexn-color of ball1, ball2, and appended with the interaction type. This allows for access to these elements if and when they're made after the site is already loaded, allowing an arbitrary number of custom inputs into the simulation. 

![ballDiv](https://github.com/Wizzerrd/jsProjectLuis/assets/133073175/94eaaa60-18ae-4ac0-9700-42a032410ab9)

## Technologies Used ##
- [matter-js](https://github.com/liabru/matter-js) to simulate rigid-body physics for the particles
- [matter-wrap](https://github.com/liabru/matter-wrap) (a plugin for the matter-js library) to make boundary wrapping easy

## TO DO: ("*" indicates an upcoming feature) ##
- toggle rigid-body interactions
- tweak particle mass and radius


