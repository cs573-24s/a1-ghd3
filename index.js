let canvas = d3.select('body');

let height = 500;
let width = 500;

let svg = canvas.append('svg')
                .attr('height', height)
                .attr('width', width)
                .attr('style', 'background-color: lightblue');

// The sky night
svg.append("rect").attr("x", 0)
                    .attr("y", 0)
                    .attr("width", width)
                    .attr("height", height - height/3)
                    .attr("fill", "lightblue")
                    .transition()
                    .duration(10000)
                    .attr("fill", "black");

// The Moon
svg.append("circle").attr("cx", 90)
                    .attr("cy", 90)
                    .attr("r", 40)
                    .attr("fill", "lightblue")
                    .transition()
                    .duration(10000)
                    .attr("fill", "white");

// The sun
svg.append("circle").attr("cx", 90)
                    .attr("cy", 90)
                    .attr("r", 40)
                    .attr("stroke", "yellow")
                    .attr("fill", "yellow")
                    .transition()
                    .duration(10000)
                    .attr("cx", 410)
                    .attr("cy", 410)
                    .attr("r", 0)
                    .attr("stroke", "orange")
                    .attr("fill", "red");

// The stars
let star = d3.symbol().type(d3.symbolStar).size(5);
svg.append("path").attr("d", star)
                  .attr("fill", "lightblue")
                  .attr("transform", "translate(400, 100)")
                  .transition()
                  .duration(10000)
                  .attr("transform", "translate(400, 100) scale(2)")
                  .attr("fill", "yellow");

svg.append("path").attr("d", star)
                  .attr("fill", "lightblue")
                  .attr("transform", "translate(450, 150)")
                  .transition()
                  .duration(10000)
                  .attr("transform", "translate(450, 150) scale(2)")
                  .attr("fill", "yellow");

svg.append("path").attr("d", star)
                  .attr("fill", "lightblue")
                  .attr("transform", "translate(480, 120)")
                  .transition()
                  .duration(10000)
                  .attr("transform", "translate(480, 120) scale(2)")
                  .attr("fill", "yellow");

svg.append("path").attr("d", star)
                  .attr("fill", "lightblue")
                  .attr("transform", "translate(200, 200)")
                  .transition()
                  .duration(10000)
                  .attr("transform", "translate(200, 200) scale(2)")
                  .attr("fill", "yellow");

svg.append("path").attr("d", star)
                  .attr("fill", "lightblue")
                  .attr("transform", "translate(150, 180)")
                  .transition()
                  .duration(10000)
                  .attr("transform", "translate(150, 180) scale(2)")
                  .attr("fill", "yellow");

// The grass
svg.append("rect").attr("x", 0)
                  .attr("y", height - height/3)
                  .attr("width", width)
                  .attr("height", height/3)
                  .attr("fill", "green");

// The road lines
svg.append("polygon").attr("points", "325,390 346,390 346,435 310,435")
                  .attr("fill", "white");

// The house
svg.append("rect").attr("x", 315)
                  .attr("y", height - height/3 - 40)
                  .attr("width", 90)
                  .attr("height", 100)
                  .attr("fill", "brown");

// The chimney
svg.append("rect").attr("x", 370)
                  .attr("y", height - height/3 - 90)
                  .attr("width", 20)
                  .attr("height", 40)
                  .attr("fill", "brown");

// The chimney
svg.append("rect").attr("x", 367.5)
                  .attr("y", height - height/3 - 95)
                  .attr("width", 25)
                  .attr("height", 10)
                  .attr("fill", "grey")
                  .attr("stroke", "white");

// The roof
svg.append("polygon").attr("points", "300,300 420,300 400,260 320,260")
                     .attr("fill", "darkgrey");


// The door
svg.append("rect").attr("x", 325)
                  .attr("y", height - height/3 + 20)
                  .attr("width", 20)
                  .attr("height", 40)
                  .attr("fill", "black");

// The window
svg.append("rect").attr("x", 365)
                  .attr("y", height - height/3 - 20)
                  .attr("width", 25)
                  .attr("height", 25)
                  .attr("stroke", "white")
                  .attr("fill", "black")
                  .transition()
                  .duration(10000)
                  .attr("fill", "yellow");

// The door knob
svg.append("circle").attr("cx", 328)
                    .attr("cy", height - height/3 + 40)
                    .attr("r", 2)
                    .attr("fill", "white");

// The road
svg.append("rect").attr("x", 0)
                  .attr("y", height - height/3 + 100)
                  .attr("width", width)
                  .attr("height", height/3 - 60)
                  .attr("fill", "gray")
                  .attr("stroke", "white");

// The flag pole
svg.append("line").attr("x1", 50)
                  .attr("y1", height - height/3)
                  .attr("x2", 50)
                  .attr("y2", height - height/3 - 100)
                  .attr("stroke", "black")
                  .attr("stroke-width", 3)
                  .transition()
                  .duration(10000)
                  .attr("stroke", "grey");

// The Indonesian flag
svg.append("rect").attr("x", 52)
                  .attr("y", height - height/3 - 100)
                  .attr("width", 40)
                  .attr("height", 20)
                  .attr("fill", "red");

svg.append("rect").attr("x", 52)
                    .attr("y", height - height/3 - 90)
                    .attr("width", 40)
                    .attr("height", 10)
                    .attr("fill", "white");

