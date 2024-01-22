Assignment 1 - Hello World: GitHub and d3  
===
Description of Project
---
For assignment 1, I utilized the d3 library to create a virtual Maneki Neko (aka a beckoning lucky cat). As such, I included the traditional features to try and emulate an real-life example, such as: a large koban coin, a functional beckoning arm, a cat in a seated position, and a bell on the cat's collar. Moreover, I tried to keep to the typical color scehemes of reds, yellows, black, and white. 

To make the cat wave, just press the "Wave to Me" button. I used a mixture of circles, rectangles, polygons, lines, and paths to best capture the overall silloughette of the cat. Below, I've included screen shots of my cat and the irl inspiration for it. 

![Alt text](https://github.com/chikpea123/a1-ghd3/blob/main/d3_cat.png)

![Alt text](https://github.com/chikpea123/a1-ghd3/blob/main/irl_cat.png)


File Link
---
https://chikpea123.github.io/a1-ghd3/

Technical and Design Achievements
---
For the technical achievements, I included a button that allows users to interact with the cat by making its arm wave. Using a combination of a button, update functions, and corresponding shape morphing I was able to mimic how the anatomy perspective changes when waving to the user (as opposed to keeping the shape flat). Additionally, I included some extra functionalities of d3 like the d3.easelinear transition to make the waving movements smoother. To make the arm go up and down, I had to construct 2 functions (one nested in the other) to transition the arm down and then back up to its original position.

For the design achievements, I included multiple paths within my file to allow for the creation of more dynamic shape options. These were not specified as requirements in the assignment; however, I chose to include them because I needed access to shapes like semi circles and thought it best to manually make them as opposed to using shape layering to get a similar effect. Moreover I implemented a variety of layering and shapes to capture some important details for the cat, like: lines for whiskers, concentric triangles for the ears, eyes with a light source for more dimension, and overlapping circles to create the cat's collar and legs. 

