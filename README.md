# Emergent Quanta (A particle simulation integrating particle collision, destruction, and creation) #
[Javascript Demo](https://wizzerrd.github.io/jsProjectLuis/)

"Complex systems produce surprising behaviour; in fact, they produce behavioral patterns and properties that just cannot be predicted from knowledge of their parts taken in isolation. The appearance of emergent properties is probably the single most distinguishing feature of complex systems. An example of this phenomenon is the Game of Life, a simple board game created in the late 1960s by American mathematician John Conway ... that displays many intriguing examples of emergence. Another example of emergence occurs in the global behaviour of an ant colony." - Encyclopedia Brtiannica

## As with many particle simulations used to demonstrate emergent behavior, this simulation will primarily feature particles (quanta) that exert attractive/repelling forces (bosons) on one another. ##

The point of a simulation such as this is to show how simple rules can give rise to complex behaviors. Emergent Quanta is a browser-based emergent-behavior particle simulation using the Matter-JS library to simulate the particles as rigid-bodies. Introducting birth and death will allow the simulation to explore concepts of sustainable systems and ecoystems. A fixed number of particles is assigned at the start of the simulation as with most emergent-behavior particle simulations, and the number of particles can fluctuate depending on interactions between existing particles. A user can assign an arbitrary number of types of quanta, whose properties can be assigned. The basic properties include attraction and repulsion in relation to other types of quanta, friction*, mass*, and radius*. As well as these basic physical properties the quanta will also have an opportunity to interact with one another upon a collision, absorbing or granting energy in the vector of the collision*, destroying or being destroyed by the collision, or having the ability to birth new quanta of a specified type in the collision. The user will have access to controls for all of these properties as well as global properties like a toggle for boundary-wrapping or fixed directional forces. The simulation renders in an HTML canvas element that is created by the matter-js engine.


#### TO DO: ("*" indicates an upcoming feature) ####
- toggle rigid-body interactions
- tweak particle mass and radius
