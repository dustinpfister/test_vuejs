
## 0.x.0 - game.js lib
* start a game.js lib that will be a module for the creation and mutation of a game state object

## 0.8.0 - fire, boiling water, and molten rock cell types
* start a range of cell types for when section.temp.kelvin hits high values

## 0.7.0 - section.temp + fire
* have a section.temp object
* have a section.temp.per value between 0 and 1
* a temp.per of zero should be considered 0 kelvin and 1 should be 5778 kelvin, make constants with these values
* have s section.temp.kelvin that will always be a kelvin value between min and max const values
* have a section.temp.displayUnit prop that can be \[Kelvin, Celsius, or Fahrenheit\]
* have a section.temp.displayTemp that will be a conversion from temp.kelvin to the temp.displayUnit

## 0.6.0 - cell.altitude, and cell.typeIndex
* have a cell.typeIndex prop that will be a cell type index value 0-water, 1-fire, 2-beach, 3-grass, 4-forest, ect
* add a cell.altitude value that will be an index value between 0 and ALTITUDE_MAX
* have a grid.seaLevel prop that will have a value in the same range as ALTITUDE
* any cell with an ALTITUDE at or below grid.seaLevel will have a cell.typeIndex of 0 water

## 0.5.0 - cell action select ui
* (done) start a sections-ui-cellaction component in sections.js
* (done) this new sections-ui-cellaction component will be used to set what clicking a grid cell will do
* (done) cell action index values just set the cell type for now

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
