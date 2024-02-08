Assignment 1 - Hello World: GitHub and d3  
===

This project uses D3.js. The code dynamically generates four kinds of graphical primitives - circles, rectangles, lines, and polygons (triangles), each in different colors.

The webpage includes a control panel (right) allowing users to adjust the number of elements displayed and their colors. Each graphical primitive responds to user interactions in the following ways:
    
    Circles: Grow and shrink in size upon clicking. Can have their color changed.
    Rectangles: Rotate continuously upon clicking. Can have their color changed.
    Triangles: Static in shape but can have their color changed.
    Lines: Fixed in length and angle but can have their color changed.
    
The range slider controls the number of graphical elements (min: 1, max: 200) displayed on the screen. Color pickers are provided for each graphical primitive, allowing the user to change their colors in real time.

Technical Achievements:
    
    Dynamic SVG Generation: The code uses D3.js to dynamically create and manipulate SVG elements.
                            Various SVG shapes are appended to the SVG container using D3.js methods:
                            A circle representing the robot's head with a light blue fill color.
                            Two circles representing the robot's eyes with black fill color.
                            A rectangle representing the robot's mouth with a red fill color.
                            A line representing the robot's antenna with a gray stroke color and a circle at its top.
                            Two lines representing the robot's eyebrows with a black stroke color.
                            An event listener is added to the nose triangle element using D3.js. When clicked, it triggers an animation that rotates the nose triangle and changes its fill color to purple.
    Interactive Elements: A triangle representing the robot's nose with an orange fill color. 
    Color Customization: Users can change the color of nose of joker by cliking on it

Design Achievements:
   
    User Interface: Just fun basic d3 project to display joker face.
    Responsive Graphics: The graphics respond to user interactions in real-time, enhancing the user experience and demonstrating the dynamic capabilities of D3.js.

[Live Demo](http://devtechster.github.io/01-ghd3/index.html)


