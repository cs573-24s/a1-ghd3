// Log to console to test if d3 is loaded
console.log(d3);

// Create SVG container
const svg = d3.select("body").append("svg")
    .attr("width", 800)
    .attr("height", 600)
    .style("background-color", "#E6E6FA"); // Light purple background to make it cute

// Define the colors for the house
const colors = {
    roof: "#D2691E", // Chocolate
    base: "#FFDEAD", // Navajo White
    door: "#8B4513", // Saddle Brown
    window: "#F0FFFF", // Azure
    chimney: "#A52A2A", // Brown
    sun: "#FFD700", // Gold
    ground: "#228B22" // Forest Green
};

// House Base - Rectangle
svg.append("rect")
    .attr("x", 300)
    .attr("y", 350)
    .attr("width", 300)
    .attr("height", 200)
    .style("fill", colors.base);

// House Roof - Polygon (Triangle)
svg.append("polygon")
    .attr("points", "450,250 300,350 600,350")
    .style("fill", colors.roof);

// Door - Rectangle
svg.append("rect")
    .attr("x", 420)
    .attr("y", 420)
    .attr("width", 60)
    .attr("height", 130)
    .style("fill", colors.door);

// Windows - Rectangles
svg.append("rect")
    .attr("x", 330)
    .attr("y", 370)
    .attr("width", 60)
    .attr("height", 60)
    .style("fill", colors.window);

svg.append("rect")
    .attr("x", 510)
    .attr("y", 370)
    .attr("width", 60)
    .attr("height", 60)
    .style("fill", colors.window);

// Chimney - Rectangle
svg.append("rect")
    .attr("x", 550)
    .attr("y", 290)
    .attr("width", 30)
    .attr("height", 60)
    .style("fill", colors.chimney);

// Sun - Circle
svg.append("circle")
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("r", 50)
    .style("fill", colors.sun);

// Ground - Rectangle
svg.append("rect")
    .attr("x", 0)
    .attr("y", 550)
    .attr("width", 800)
    .attr("height", 50)
    .style("fill", colors.ground);

// Adding some cute details
// Clouds
svg.append("ellipse")
    .attr("cx", 200)
    .attr("cy", 100)
    .attr("rx", 50)
    .attr("ry", 30)
    .style("fill", "#FFF");

svg.append("ellipse")
    .attr("cx", 260)
    .attr("cy", 80)
    .attr("rx", 70)
    .attr("ry", 40)
    .style("fill", "#FFF");

svg.append("ellipse")
    .attr("cx", 300)
    .attr("cy", 120)
    .attr("rx", 50)
    .attr("ry", 30)
    .style("fill", "#FFF");

// Flower
svg.append("circle")
    .attr("cx", 100)
    .attr("cy", 570)
    .attr("r", 10)
    .style("fill", "#FF69B4"); // Hot pink

svg.append("circle")
    .attr("cx", 120)
    .attr("cy", 570)
    .attr("r", 10)
    .style("fill", "#FF69B4"); // Hot pink

svg.append("circle")
    .attr("cx", 110)
    .attr("cy", 560)
    .attr("r", 10)
    .style("fill", "#FF69B4"); // Hot pink

svg.append("circle")
    .attr("cx", 110)
    .attr("cy", 580)
    .attr("r", 10)
    .style("fill", "#FF69B4"); // Hot pink

svg.append("circle")
    .attr("cx", 110)
    .attr("cy", 570)
    .attr("r", 5)
    .style("fill", "#FFFF00"); // Yellow
