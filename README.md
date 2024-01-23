Assignment 1 - Hello World: GitHub and d3  
===
# Data Visualization Assignment 1

## Description

This project is an interactive shooting game. The rule is to drag and release the arrow with your mouse to shoot as many apples as possibe.

You can control the direction and force you give the arrow by releasing the mouse at different places. Note the arrow has gravity as well.

The apples being shot will fall down and bouce back and forth until they are out of energy.

## Screenshots

<img width="622" alt="Screenshot 2024-01-23 064056" src="https://github.com/TonyC793/a1-ghd3/assets/100252364/58dbc131-ff36-44af-a2b4-9db38318aa60">

*Screenshot 1: The original picture*

<img width="630" alt="Screenshot 2024-01-23 064308" src="https://github.com/TonyC793/a1-ghd3/assets/100252364/5a0d1ab0-f10b-4fbf-826e-c566cb2067e8">

*Screenshot 2: After releasing the arrow*

<img width="622" alt="Screenshot 2024-01-23 064422" src="https://github.com/TonyC793/a1-ghd3/assets/100252364/67df9636-beb3-41ca-be9e-7dc743512e00">

*Screenshot 3: The falling and bouncing of apples*

## Demo Site

Demo site: https://TonyC793.github.io/a1-ghd3

## Technical Achievement Desription

### Advanced Implementation of Interactive Graphics and Physics Simulation in d3.js

This project showcases a vivid application of d3.js, a powerful JavaScript library, for creating an interactive visualization with complex physics simulations. The key technical achievements include:

**SVG Manipulation**: Efficiently creates and manipulates SVG elements such as circles, rectangles, and paths.

**Coordinate Calculations**: Implements intricate calculations for positioning elements like the child, arrow, tree, and apples.

**Interactive Drag Behavior**: Integrates d3.drag() to create an interactive arrow that users can manipulate. This involves calculating the drag's impact on the arrow's angle and given force, hence the subsequent motion.

**Physics-based Projectile Motion**: Develops a physics simulation for the arrow's trajectory post-release. It includes velocity calculations, angle adjustments, and gravity effects, showcasing a sophisticated use of mathematics in animation.

**Collision Detection Algorithm**: Implements a custom collision detection algorithm to identify when the arrow hits the apples. This algorithm checks the relative positions.

**Realistic Motion Effects**: Applies physics principles to simulate the falling and bouncing of apples, with considerations for gravity, velocity, and energy loss on impact.

These technical aspects also reflect the application of computational geometry, physics, and interactive design in data visualization.

## Design Achievement Description

### Aesthetic and User-Friendly Data Visualization with d3.js

**Balanced Layout and Composition**: The spatial arrangement of elements like the child, tree, and apples creates a visually balanced and cohesive composition.The screen also includes well-placed, multiline instructional texts, aiding users in understanding the interaction mechanism and the objectives of the visualization.

**Intuitive Interaction Design**: The draggable arrow provides an intuitive and engaging way for users to interact with the visualization.The gravity and velocity of the arrow are also designed to be realistic, making the interaction more intuitive and enjoyable.

**Responsive and Entertaining Design**: The apples have gravity and can bounce off the ground, creating a realistic and responsive design. One can see the trajectories of applesand the arrow change as the arrow is released at different angle and forces, making the visualization informative and entertaining.

**Adaptive Design**: Ensures that the visualization remains functional and aesthetically pleasing across different screen sizes and resolutions, a critical aspect of modern web design.
