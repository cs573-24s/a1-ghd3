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

    Dynamic SVG Generation: The code uses D3.js to dynamically create and manipulate SVG elements based on user input.
    Interactive Elements: Interactive behaviors like growing, shrinking, and rotating are implemented for the SVG elements.
    Color Customization: Users can customize colors of each graphic element.

Design Achievements:

    User Interface: A control panel is designed for easy interaction with the graphic elements.
    Responsive Graphics: The graphics respond to user interactions in real-time, enhancing the user experience and demonstrating the dynamic capabilities of D3.js.

Live Demo: https://atamagnini.github.io/a1-ghd3/index.html
