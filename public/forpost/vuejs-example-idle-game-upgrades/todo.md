## 0.1.0 - Over time upgrades

## 0.1.0 - Menus, and Additional upgrades
* have a main menus div in the template
* have all minerals in the menus div
* have upgrades in the menus div
* in the disp div have links for each menu
* add an upgrade for over time production

## 0.0.0 - first upgrade
* (done) copy over what was started with vuejs-example-idle-game-over-time
* (done) update the appName of this example
* (done) have an upgrades div in the template
* (done) have a game.manualMineCount prop
* (done) use the game.manualMineCount prop to for the count of each mine
* (done) I will want a gameMod.upgradeCheck public method that will be called each time an upgrade button is clicked
* (done) have a game.upgrades object where each key is a name of the upgrade that matches what is in the button id
* (done) display the current level of an upgrade, cost, and a description in the upgrades div
* (done) call the upgrade.figureCost method for each upgrade object in game.upgrades in gameMod.create
* (done) be able to set game.upgrades via a gameMod.createState option
* (done) the gameMod.upgradeCheck method will check if there is enough money for the given upgrade
* (done) in the event that there is enough money for an upgrade upgrade.applyToGame will be called, and cost will be subtracted
* (done) game.upgrades needs to be part of the save state
* (done) have the first working upgrade increase the manual mine count
* (done - 01/27/2021)