# Galactic Pixel Art Maker

## Overview
This is a project for my Udacity/Google FEND Scholarship Nanodegree Program.

![App Screen](https://github.com/DownTheMatrix/Pixel-Art-Maker-Star-Wars-Themed-/blob/master/Screenshot.png?raw=true)

### How To Run The App
+ Clone the repository to your local machine or download the project as a .zip file
+ Don't alter the folder/files disposition
+ Click on the index.html file to open the app in your browser

In case you run into some issues, and cannot display the app correctly, try running it in a local server. 
To launch a local server, choose one of the following methods: 

+ Launch a local server with Python (open the console and type):

  `python -m http.server` (for Python 3x);
  
  `python -m SimpleHTTPServer` (for Python 2x);

Then move to the default address `http://localhost:8000`.

+ Launch a local server with Node (open the node.js console and type):

  `http-server`

As above, the default address is `http://localhost:8000`.

Alternatively, you can try it out here: [Live Demo](https://downthematrix.github.io/Pixel-Art-Maker-Star-Wars-Themed-/.)

### App Overview
The user can interact with the input boxes and create a grid with the chosen amount of rows and columns (at the moment, the grid cannot exceed a size of 50x50).

#### Instructions
After defining the number of rows and columns for the grid, the user can pick a color and left click on the grid tiles to draw a figure. Double-clicking will result in restoring the tile to the default white color. More buttons are present: the RESET COLOR button will restore all the grid tiles to the default white color, and the RESET GRID button will hide the grid from the screen, allowing the user to create a new one.

#### Code Dependencies
The project is realized using HTML5, CSS and jQuery. 

##### Todo
I plan to add a few features in the future to make the app more customizable: 

+ Increase the grid size
+ Icons for the buttons
+ Interactive background images
+ Extra features
