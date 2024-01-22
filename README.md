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



Requirements
---

1. Your project should contain at least four kinds of graphics primitives (circles, rectangles, lines, polygons) in different colors. 
2. Your document should identify the source of the code if you start with code that you found. 
3. Your code should be forked from the GitHub repo and linked using GitHub pages. See the "GitHub Details" section below for detailed instructions on how to do this.

GitHub Details
---

- Fork the GitHub Repository for Assignment 1. You now have a copy associated with your username.
- Make changes to index.html to fulfill the project requirements. 
- Make sure your "main" branch matches your "gh-pages" branch. See the GitHub Guides referenced above if you need help.
- Edit the README.md with a link to your gh-pages site "http://YourUsernameGoesHere.github.io/01-ghd3/index.html".

Submission Details
---
- To submit, make a [Pull Request](https://help.github.com/articles/using-pull-requests/) on the original repository.
- Note: name your pull request using the following scheme: 
```
a1-your Gh username-your first name-your lastname

```

Vis Details
---

For this project you should use d3.js. 
You can learn from examples on the [d3.js](http://d3js.org) site or start from scratch.

See the [Using d3js](https://github.com/mbostock/d3/wiki#using) documentation for how to run your own local server.

Creative solutions are welcome! In the past I've seen recreations of paintings, interactives, and more.

Go beyond the minimum requirements of this project.
Experiment with other aspects of the [d3 API](https://github.com/mbostock/d3/wiki/API-Reference) and [d3 Tutorials](https://github.com/mbostock/d3/wiki/Tutorials). 
Try making the elements interactive, for example, or animate them.

Grading
---

Grades are on a 120 point scale. 
96 points will be graded for functionality: the program does what the assignment requests with an informative README. 

We will use Google Chrome to view submissions. 
Be sure to test your code there.

Below are some, but not necessarily all, of the key points we will consider during grading:

- Circles and Rectangles  
- Lines  
- Paths  
- Different colors  
- README Quality
    - A description of what you have created. 1-2 screenshots are recommended for the README.  
    - A working link to the hosted files (usually the gh-pages 'live' url)  
    - Section for Technical and Design Achievements

Technical Achievement Desription -- 12  
Design Achievement Description -- 12

Remember, it is up to *you* to define what constitutes a technical and design achievements.
Be ambitious as these are designed to allow you to shape your learning.
These are the only way to move from B to A territory.

