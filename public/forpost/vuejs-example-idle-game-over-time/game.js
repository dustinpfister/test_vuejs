var gameMod = (function(){;

/********** ********** **********
    HELPERS
********** ********** **********/

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
  var getMinObj = function(minerals, query){
    // if string get by type
    if(typeof query === 'string'){
      var i = minerals.length;
      while(i--){
          var minObj = minerals[i];
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

/********** ********** **********
    CREATE
********** ********** **********/

  var createMinerals = function(opt){
      opt = opt || [{type:'iron', unitCount: 5}];
      var minerals = [
        {type: 'iron', unitCount: 0, moneyPerUnit: 1, locked: false, chance: 1},
        {type: 'copper', unitCount: 0, moneyPerUnit: 3, locked: false, chance: 0.5},
        {type: 'silver', unitCount: 0, moneyPerUnit: 9, locked: false, chance: 0.25},
        {type: 'gold', unitCount: 0, moneyPerUnit: 25, locked: true, chance: 0.01}
      ];
      opt.forEach(function(minOpt){
        var minObj = getMinObj(minerals, minOpt.type);
        if(minObj){
            minObj.unitCount = minOpt.unitCount;
        }
      });
      return minerals;
  };

  // create a main game state object
  api.createState = function(opt){
    opt = opt || {};
    return {
      lt: opt.lt || new Date(),
      money: opt.money || 0,
      money_formatted: format_money(opt.money || 0),
      overTime: {
          secs: 0,
          per: 0,
          minesPerSec: 0.125
      },
      minerals: createMinerals(opt.minerals)
    };
  };

/********** ********** **********
    MINE
********** ********** **********/

  // a single min action using Math.random for each mineral
  var mineSingle = function(game){
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

  // call mineSingle a given count of times
  var mineLoop = function(game, count){
      var i = count;
      while(i--){
         mineSingle(game);
      }
  };

  // mine by chance and count
  var mineByChanceAndCount = function(game, count){
      game.minerals.map(function(minObj){
          minObj.unitCount += Math.floor(minObj.chance * count);
          return minObj;
      });
  };

  // prefrom a mine action
  api.mine = function(game, count){
      if(count === 1){
          mineSingle(game);
      }
      if(count > 1 && count <= 50){
          mineLoop(game, count);
      }
      if(count > 50){
          mineByChanceAndCount(game, count);
      }
  };

/********** ********** **********
    SELL
********** ********** **********/

  // sell
  api.sell = function(game, type){
      var minObj = getMinObj(game.minerals, type);
      game.money += minObj.unitCount * minObj.moneyPerUnit;
      game.money_formatted = format_money(game.money);
      minObj.unitCount = 0;
  };

/********** ********** **********
    UPDATE
********** ********** **********/

  // update method
  api.update = function(game, secs){
    var ot = game.overTime,
    mineSecs = 1 / ot.minesPerSec;
    ot.secs += secs;
    ot.per = ot.secs / mineSecs;
    ot.per = ot.per > 1 ? 1 : ot.per;
    if(ot.secs >= mineSecs){
       var count = Math.floor(ot.secs / mineSecs);
       console.log(count);
       api.mine(game, count);
       ot.secs = 0;
    }
  };

  // return public API
  return api;
}());
