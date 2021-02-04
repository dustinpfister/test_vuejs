

## 0.x.0 - cell.altitude
* have a cell.typeIndex prop that will be a cell type index value 0-water, 1-fire, 2-beach, 3-grass, 4-forest, ect
* add a cell.altitude value that will be an index value between 0 and ALTITUDE_MAX
* have a grid.seaLevel prop that will have a value in the same range as ALTITUDE
* any cell with an ALTITUDE at or below grid.seaLevel will have a cell.typeIndex of 0 water

## 0.5.0 - cell action select ui
* start a sections-ui-grid-cellaction component in sections.js
* this new sections-ui-cellaction component will be used to set what clicking a grid cell will do
* have a cellaction 0 that just simply will select a cell, and display info about that cell
* have a cellaction 1 that will increase altitude by one for each click
* have a cellaction 2 that wll lower altitude by one for each click

## 0.3.0 - sun-ui-canvas interface
* (done) start a new sun-ui-canvas comp that will display the current position of the sun in a canvas element
* (done) draw sections in canvas
* (done) make it so I can change sun pos by clicking an draging sun object in the canvas
* (done) fix bug where max sun distance causes the sun to be on top of sections rather than just touching 

## 0.2.0 - Grid for each section
* (done) have a grid for each section object
* (done) start a sections-ui-grid for menu/sections.js
* (done) start a system when it comes to the state of the grid

## 0.1.0 - Section select UI
* (done) start a sections-ui-select component in sections.js
* (done) the sections-ui-select component can be used to loop forward and backward over sections setting a 'currentSection'
* (done) Section select ui displays info for the current section, and buttons to change section number

## 0.0.0 - sun and sections menus
* (done) start with the source code for my vuejs-example-menu project
* (done) have a sun menu where I can set the position of the sun relative to the other world section objects
* (done) display current sun values in sun menu
* (done) can set an angle value for the sun
* (done) can set a dist value for the sun from the center position
* (done) center button in sun-ui-pos
* (done) iife in menu.js
* (done) use createSections helper in main.js
* (done) I will want a sections-info component started
* (done) just display a list of all the sections for now in sections-info
* (done) updating sun angle and dist also updates dist and per values for each section
