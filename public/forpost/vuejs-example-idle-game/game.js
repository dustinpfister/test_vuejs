var utils = {};

// format number as money
// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
utils.format_money = function(number){
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0 // (causes 2500.99 to be printed as $2,501)
    });
    return formatter.format(number); /* $2,500.00 */
};

var gameMod = (function(){;

  var api = {};

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

  // create a main game state object
  api.createState = function(){
    return {
      money: 0,
      money_formatted: utils.format_money(0),
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

  api.sell = function(game, type){
      var minObj = getMinObj(game, type);
      game.money += minObj.unitCount * minObj.moneyPerUnit;
      game.money_formatted = utils.format_money(game.money);
      minObj.unitCount = 0;
  };

  return api;

}());

new Vue({
    el: '#app',
    template: '<div>' +
        '<input id="button_mine" type="button" value="mine" v-on:click="click"> <span> {{ money_formatted }} </span> <br>' +
        '<div>' +
            '<div v-bind:id="\'minbox_\'+min.type" '+
                'class="wrap_minbox" v-bind:style="min.locked?\'display:none;\':\'display:block;\'" '+
                'v-for="min in minerals" '+
            '>' +
                 '<input v-bind:id="\'button_sellall_\' +min.type" type="button" value="sell all" v-on:click="click">' +
                 '<div><span>type: {{ min.type }}, count: {{ min.unitCount }}</span></div>' +
            '</div>' +
        '</div>' +
    '</div>',
    data: gameMod.createState(),
    methods: {
        // a button was clicked
        click: function (e) {
            var dat = this.$data;
            var buttonArr = e.target.id.split('_');
            if(buttonArr[1] == 'mine'){
                console.log('mine');
                gameMod.mine(dat);
            }
            if(buttonArr[1] == 'sellall'){
                var type = buttonArr[2];
                console.log('sell all ' + type);
                gameMod.sell(dat, type);
            }
        }
    }
});
