var vm = new Vue({
    el: '#app',
    template: '<div class="wrap_main">' +
        '<div class="disp">'+
            '<span> {{ game.money_formatted }} </span>'+
            '<div class="probar" v-bind:style="\'width:\'+Math.round(game.overTime.per * 100)+\'%;\'" ></div>' +
            '<div class="navbar">'+
                '<span><input id="button_nav_manual" type="button" value="Manual" v-on:click="click"> | ' +
                '<input id="button_nav_minerals" type="button" value="Minerals" v-on:click="click"> | ' +
                '<input id="button_nav_upgrades" type="button" value="Upgrades" v-on:click="click"> | ' + 
                '<input id="button_nav_reset" type="button" value="Reset Points" v-on:click="click"></span>'+
            '</div>' +
        '</div>' +
        '<div class="manual wrap_menu" v-if="currentMenu===\'manual\'">'+
            '<input id="button_mine" type="button" value="mine" v-on:click="click">'+
        '</div>'+
        '<div class="upgrades wrap_menu" v-if="currentMenu===\'upgrades\'">'+
            '<div v-for="upgrade in game.upgrades">' +
                '<input v-bind:id="\'button_upgrade_\'+upgrade.key"'+ 
                    'type="button" v-bind:value="\'upgrade (\'+upgrade.level+\')\'" v-on:click="click"'+
                '>'+
                '<span> Level: {{ upgrade.level }} | </span>' +
                '<span> cost: {{ upgrade.cost }} | </span>' +
                '<span> desc: {{ upgrade.desc }} </span>' +
            '</div>'+
        '</div>' +
        '<div class="minerals wrap_menu" v-if="currentMenu===\'minerals\'">' +
            '<div v-bind:id="\'minbox_\'+min.type" '+
                'class="minbox"' +
                'v-bind:style="min.locked?\'display:none;\':\'display:block;\'" '+
                'v-for="min in game.minerals" '+
            '>' +
                 '<input v-bind:id="\'button_sellall_\' +min.type" type="button" value="sell all" v-on:click="click">' +
                 '<div><span>type: {{ min.type }}, count: {{ min.unitCount }}</span></div>' +
            '</div>' +
        '</div>' +
        '<div class="reset wrap_menu" v-if="currentMenu===\'reset\'">' +
            '<input id="button_reset_now" type="button" value="Reset Now" v-on:click="click">' +
            '<p>You have {{ game.resetPoints }} Reset Points, '+
                'and reseting now will give you {{ game.resetPointsDelta }} more Reset Points</p>' +
        '</div>' +
    '</div>',
    data: {
        game: gameMod.createState(),
        newGameOptions: {
            money: 10000,
            minerals: [{type:'iron', unitCount: 20}],
            upgrades: [{key: 'manual', level: 0}]
        },
        currentMenu: 'reset',
        appName: 'vuejs-example-idle-game-reset'
    },
    methods: {
        // a button was clicked
        click: function (e) {
            var dat = this.$data;
            var buttonArr = e.target.id.split('_');
            // The manual mine button
            if(buttonArr[1] == 'mine'){
                gameMod.mine(dat.game, dat.game.manualMineCount);
            }
            // a sell all button
            if(buttonArr[1] == 'sellall'){
                var type = buttonArr[2];
                gameMod.sell(dat.game, type);
            }
            // an upgrade button
            if(buttonArr[1] == 'upgrade'){
                gameMod.upgradeCheck(dat.game, buttonArr[2]);
            }
            // if a nav button
            if(buttonArr[1] == 'nav'){
                dat.currentMenu = buttonArr[2];
            }
            // if a reset button
            if(buttonArr[1] == 'reset'){
                console.log( 'reset' );
                dat.game = gameMod.reset(dat.game);
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
                upgrades: Object.keys(dat.game.upgrades).map(function(upKey){
                    var upgrade = dat.game.upgrades[upKey];
                    return {
                        key: upgrade.key,
                        level: upgrade.level
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
