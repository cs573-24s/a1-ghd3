Assignment 1 - Hello World: GitHub and d3  
===

Link to gh-pages: https://jacklafond.github.io/a1-ghd3/index.html

Description
---
For this project I created an animated scene of a football being kicked into a field goal. I used rectangles and arcs to create the look of a football field, and I added some text saying "CS 573" for fun to the post of the field goal. To get familiar with d3 I referenced the link provided in the assignment read me, [d3.js](http://d3js.org). To see the animation again I included a replay button that when clicked reloads the page (probably not the bext way to do this). I tried to use realistic colors so that the abstratcion did not affect the udnerstanding of the visual. For example the green grass, yellow field goal, and brown football I think help to identify this as a football image, even though the shapes are not very complex and detail accurate.

Screenshot
---
![Lafond_CS573_a1_Screenshot1](https://github.com/JackLafond/a1-ghd3/assets/122573355/7f2a0711-7e5e-4811-8d2e-ca227dfdb7f5)

Technical Achievement
---
This is my first time using d3 and I think that I did a good job of trying to dive into library. I tried to make the football animated and in order to do that I used a quadratic function to create data for the trajectory of the football. I then used paths and curves in d3's library to trace the trajectory of the football. For the football I used an ellipse and added it as a marker in the svgs definitions so that I could add it to the path. I then added it as a marker to the end of the path and in order to animate the path I found this article on medium which uses transitions and stroke dash offsets, [medium-louisemoxy](https://medium.com/@louisemoxy/create-a-d3-line-chart-animation-336f1cb7dd61). For future work I would like to figure out a way to have the football lead the path rather than being static.

