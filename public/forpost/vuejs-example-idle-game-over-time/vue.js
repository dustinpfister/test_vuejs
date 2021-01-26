new Vue({
    el: '#app',
    template: '<div class="wrap_main">' +
        '<div class="disp">'+
            '<input id="button_mine" type="button" value="mine" v-on:click="click"> <span> {{ game.money_formatted }} </span>'+
        '</div>' +
        '<div class="probar" v-bind:style="\'width:\'+Math.round(game.overTime.per * 100)+\'%;\'" ></div>' +
        '<div>' +
            '<div v-bind:id="\'minbox_\'+min.type" '+
                'class="minbox"' +
                'v-bind:style="min.locked?\'display:none;\':\'display:block;\'" '+
                'v-for="min in game.minerals" '+
            '>' +
                 '<input v-bind:id="\'button_sellall_\' +min.type" type="button" value="sell all" v-on:click="click">' +
                 '<div><span>type: {{ min.type }}, count: {{ min.unitCount }}</span></div>' +
            '</div>' +
        '</div>' +
    '</div>',
    data: {
        game: gameMod.createState()
    },
    methods: {
        // a button was clicked
        click: function (e) {
            var dat = this.$data;
            var buttonArr = e.target.id.split('_');
            if(buttonArr[1] == 'mine'){
                gameMod.mine(dat.game);
            }
            if(buttonArr[1] == 'sellall'){
                var type = buttonArr[2];
                gameMod.sell(dat.game, type);
            }
        }
    },
    // on mounted life cycle hook
    mounted: function(){
        console.log('mounted, started app loop');
        var lt = new Date(),
        dat = this.$data,
        game;

        var jsonStr = localStorage.getItem('vuejs-example-idle-game-over-time');
        if(jsonStr){
            dat.game = gameMod.createState(JSON.parse(jsonStr));
        }else{
            dat.game = gameMod.createState({money:100, minerals:[{type:'iron', unitCount: 100}]});
        }
        // app loop calling gameMod.update
        var loop = function(){
            var now = new Date(),
            secs = (now - lt) / 1000;
            gameMod.update(dat.game, secs);
            var jsonStr = JSON.stringify({
                money: dat.game.money,
                minerals: dat.game.minerals.map(function(minObj){
                    return {
                        type: minObj.type,
                        unitCount: minObj.unitCount
                    };
                })
            });
            localStorage.setItem('vuejs-example-idle-game-over-time', jsonStr);
            setTimeout(loop, 33);
            lt = now;
        };
        loop();
    }
});
