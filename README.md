# Emergent Quanta (A particle-life simulation integrating particle collision, destruction, and creation) #

"Complex systems produce surprising behaviour; in fact, they produce behavioral patterns and properties that just cannot be predicted from knowledge of their parts taken in isolation. The appearance of emergent properties is probably the single most distinguishing feature of complex systems. An example of this phenomenon is the Game of Life, a simple board game created in the late 1960s by American mathematician John Conway ... that displays many intriguing examples of emergence. Another example of emergence occurs in the global behaviour of an ant colony." - Encyclopedia Brtiannica

### As with many particle simulations used to demonstrate emergent behavior, this simulation will primarily feature particles (quanta) that exert attractive/repelling forces (bosons) on one another. What will distinguish this one is that particle collisions will exhibit simple programmable behaviors that will add a new layer of complexity to the emergent system. ###

The point of a simulation such as this is to show how simple rules can give rise to complex behaviors. **Emergent Quanta** will be a browser-based emergent-behavior particle simulation using the Matter-JS library to simulate the particles as rigid-bodies. Introducting **birth** and **death** will allow the simulation to explore concepts of sustainable systems and ecoystems. Instead of a fixed number of particles determined at the start of the simulation as with most emergent-behavior particle simulations, the number of particles can fluctuate depending on interactions between existing particles

A user can assign an arbitrary number of **types of** quanta, whose **properties** can be assigned. The basic properties include attraction and repulsion in relation to other types of quanta, friction, mass, and radius. As well as these basic physical properties the quanta will also have an opportunity to interact with one another upon a collision, absorbing or granting energy in the vector of the collision, destroying or being destroyed by the collision, or having the ability to birth new quanta of a specified type in the collision. The user will have access to controls for all of these properties as well as global properties like a toggle for boundary-wrapping or fixed directional forces. The simulation will render in an HTML Canvas with the option to enable charts via Chart JS.

## Functionality & Features ##

### In Emergent Quanta, users will be able to: ###
- Simulate emergent particle behaviors through a in a single page application (SPA) that allows for users to manipulate most aspects of the simulations
  - Arbitrary number of particles with adjustable population, gravity, friction, mass, radius, and **interactions**
  - Interactions include granting or taking inertia, killing or being killed, or creating a chosen particle class (mating)
  - Mating can be adjusted to happen after the particle has been alive for a certain amount of frames (also known as "time to maturity")
  - Adjustable world settings like constant force and boundary wrapping
- Adjustments to simulation can be made through a scrolling drop-down menu
- Interact with the simulation with the mouse pointer. Interactions include creation, destruction, attraction, and repulsion, or a combination of these.
- Track analytics in real time with interactive charts
- Save simulation configurations and analytics for later use and load those saved configurations

### In addition, this project will include: ###
- Splash Screen upon load with site title, instructions, and info, which disappears upon user input. Accessible via 'info' button
- Day/Night Mode
- Professional links
- Emergent Styling
- Not this readme but a similar one

## Wireframes ##
**GRAPHICS AND PERFORMACE SUBJECT TO CHANGE**

### Main UI ###
![jsProjectParticles (1)](https://github.com/Wizzerrd/jsProjectLuis/assets/133073175/f6aefd09-52b2-4ad5-bfb3-6d25ca52396a)


### Overlay ###
![jsProjectParticles (2)](https://github.com/Wizzerrd/jsProjectLuis/assets/133073175/bf65d21a-20bb-4405-8f62-8d4e9f8c95bf)


## Technologies, Libraries, & APIs ##
- [HTML Canvas](https://www.w3schools.com/html/html5_canvas.asp) to handle drawing graphics in browser
- [matter-js](https://github.com/liabru/matter-js) to simulate rigid-body physics for the particles
- [matter-wrap](https://github.com/liabru/matter-wrap) (a plugin for the matter-js library) to make boundary wrapping easy
- [Chart.js](https://github.com/chartjs/Chart.js) to display analytics in a pleasant format

## Implementation Timeline ##
- Friday Afternoon: Create small scale implementations of matter-js and Chart.js to become familiar with the API
- Weekend: Refine skills with libraries, get basic project skeleton started, begin writing HTML and styling
- Monday: Finalize site format with canavas and button placement, implement canvas, beging implementing physics engine
- Tuesday: Finalize physics engine, begin implementing user interface
- Wednesday: Finalize user interface with AJAX and interfacing with simulation, implement charts
- Thursday Morning: Finalize chart implementation



