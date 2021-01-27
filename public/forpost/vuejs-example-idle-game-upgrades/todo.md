## 0.0.0 - first upgrade
* (done) copy over what was started with vuejs-example-idle-game-over-time
* (done) update the appName of this example
* (done) have an upgrades div in the template
* (done) have a game.manualMineCount prop
* (done) use the game.manualMineCount prop to for the count of each mine
* (done) I will want a gameMod.upgradeCheck public method that will be called each time an upgrade button is clicked
* (done) have a game.upgrades object where each key is a name of the upgrade that matches what is in the button id

* display the current level of an upgrade, cost, and a description in the upgrades div

* be able to set game.upgrades via a gameMod.create option
* game.upgrades needs to be part of the save state
* have the first working upgrade increase the manual mine count
