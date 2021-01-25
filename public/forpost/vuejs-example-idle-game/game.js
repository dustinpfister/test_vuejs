var gameMod = (function(){;

  var api = {};

  // create a main game state object
  api.createState = function(){
    return {
      money: 0,
      minerals: [
        {type: 'iron', unitCount: 0, moneyPerUnit: 1, locked: false},
        {type: 'copper', unitCount: 0, moneyPerUnit: 2.5, locked: true},
        {type: 'silver', unitCount: 0, moneyPerUnit: 7, locked: true},
        {type: 'gold', unitCount: 0, moneyPerUnit: 25, locked: true}
      ]
    };
  };

  api.mine = function(game){
    game.minerals[0].unitCount += 1;
  };

  return api;

}());

new Vue({
    el: '#app',
    template: '<div>' +
        '<input id="button_mine" type="button" value="mine" v-on:click="click"> <span> {{ money }} </span> <br>' +
        '<div>' +
            '<div v-bind:id="\'minbox_\'+min.type" class="wrap_minbox" v-for="min in minerals" >' +
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
            }
        }
    }
});
