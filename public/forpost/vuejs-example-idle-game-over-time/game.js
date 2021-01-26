var gameMod = (function(){;

  // HELPERS

  // format number as money
  // https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
  var format_money = function(number){
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      // These options are needed to round to whole numbers if that's what you want.
      minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      maximumFractionDigits: 0 // (causes 2500.99 to be printed as $2,501)
    });
    return formatter.format(number); /* $2,500.00 */
  };
  // get a mineral object
  var getMinObj = function(game, query){
    // if string get by type
    console.log(query);
    if(typeof query === 'string'){
      var i = game.minerals.length;
      while(i--){
          var minObj = game.minerals[i];
          if(minObj.type === query.toLowerCase()){
             return minObj;
          }
      }
    }
    // if number get by index
    if(typeof query === 'number'){
      return game.minerals[query];
    }
    return false;
  };

  // PUBLIC API
  var api = {};

  // create a main game state object
  api.createState = function(){
    return {
      money: 0,
      money_formatted: format_money(0),
      overTime: {
          secs: 0,
          minesPerSec: 2
      },
      minerals: [
        {type: 'iron', unitCount: 0, moneyPerUnit: 1, locked: false, chance: 1},
        {type: 'copper', unitCount: 0, moneyPerUnit: 3, locked: false, chance: 0.5},
        {type: 'silver', unitCount: 0, moneyPerUnit: 9, locked: false, chance: 0.25},
        {type: 'gold', unitCount: 0, moneyPerUnit: 25, locked: true, chance: 0.01}
      ]
    };
  };
  // prefrom a mine action
  api.mine = function(game){
    var i = 0,
    len = game.minerals.length,
    minObj;
    while(i < len){
      minObj = game.minerals[i];
      if(!minObj.locked){
          var roll = Math.random();
          if(roll < minObj.chance){
              minObj.unitCount += 1;
          }
      }
      i = i + 1;
    }
  };
  // sell
  api.sell = function(game, type){
      var minObj = getMinObj(game, type);
      game.money += minObj.unitCount * minObj.moneyPerUnit;
      game.money_formatted = format_money(game.money);
      minObj.unitCount = 0;
  };

  api.update = function(game, secs){
    var ot = game.overTime;
    ot.secs += secs;
    if(ot.secs >= 1 / ot.minesPerSec){
       console.log('auto mine');
       ot.secs = 0;
    }
  };

  // return public API
  return api;
}());
