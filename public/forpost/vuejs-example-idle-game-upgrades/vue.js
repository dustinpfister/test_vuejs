var vm = new Vue({
    el: '#app',
    template: '<div class="wrap_main">' +
        '<div class="disp">'+
            '<input id="button_mine" type="button" value="mine" v-on:click="click">'+
            '<span> {{ game.money_formatted }} </span>'+
        '</div>' +
        '<div class="probar" v-bind:style="\'width:\'+Math.round(game.overTime.per * 100)+\'%;\'" ></div>' +
        '<div class="upgrades">'+
            '<input id="button_upgrade_manual" type="button" value="upgrade" v-on:click="click">'+
        '</div>' +
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
        game: gameMod.createState(),
        newGameOptions: {
            money: 100,
            minerals: [{type:'iron', unitCount: 20}]
        },
        appName: 'vuejs-example-idle-game-upgrades'
    },
    methods: {
        // a button was clicked
        click: function (e) {
            var dat = this.$data;
            var buttonArr = e.target.id.split('_');
            console.log(buttonArr);
            // The manual mine button
            if(buttonArr[1] == 'mine'){
                gameMod.mine(dat.game, 1);
            }
            // a sell all button
            if(buttonArr[1] == 'sellall'){
                var type = buttonArr[2];
                gameMod.sell(dat.game, type);
            }
            // an upgrade button
            if(buttonArr[1] == 'upgrade'){
                gameMod.mine(dat.game, 1);
            }
        },
        // away production
        away: function(){
            var dat = this.$data;
            var now = new Date();
            var secs = (now - dat.game.lt) / 1000;
            var ot = dat.game.overTime,
            mineSecs = 1 / ot.minesPerSec,
            mineCount = Math.floor(secs / mineSecs);
            console.log('It has been ' + secs + ' seconds since last save');
            console.log('This results in a mine count of ' + mineCount);
            gameMod.mine(dat.game, mineCount);
            dat.game.lt = new Date();
        },
        // load a save state
        load: function(){
            var dat = this.$data;
            var jsonStr = localStorage.getItem(dat.appName);
            if(jsonStr){
                var opt = JSON.parse(jsonStr);
                opt.lt = new Date(opt.lt);
                dat.game = gameMod.createState(opt);
            }else{
                dat.game = gameMod.createState(dat.newGameOptions);
            }
        },
        // save a save state
        save: function(){
            var dat = this.$data;
            var jsonStr = JSON.stringify({
                money: dat.game.money,
                minerals: dat.game.minerals.map(function(minObj){
                    return {
                        type: minObj.type,
                        unitCount: minObj.unitCount
                    };
                }),
                lt: dat.game.lt
            });
            localStorage.setItem(dat.appName, jsonStr);
        },
        // reset save and current game (can use from javaScript console as > vm.reset() )
        reset: function(){
            var dat = this.$data;
            localStorage.removeItem(dat.appName);
            dat.game = gameMod.createState(dat.newGameOptions);
        }
    },
    // on mounted life cycle hook
    mounted: function(){
        console.log('mounted, started app loop');
        var vm = this,
        dat = vm.$data,
        game;
        // load progress
        vm.load();
        vm.away();
        // app loop calling gameMod.update
        var loop = function(){
            var now = new Date(),
            secs = (now - dat.game.lt) / 1000;
            gameMod.update(dat.game, secs);
            // save progress
            vm.save();
            setTimeout(loop, 33);
            dat.game.lt = now;
        };
        loop();
    }
});
