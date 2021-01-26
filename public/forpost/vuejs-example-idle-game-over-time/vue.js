new Vue({
    el: '#app',
    template: '<div class="wrap_main">' +
        '<div><input id="button_mine" type="button" value="mine" v-on:click="click"> <span> {{ money_formatted }} </span></div>' +
        '<div v-bind:style="\'background:lime;height:10px;width:\'+Math.round(overTime.per * 100)+\'%;\'" ></div>' +
        '<div>' +
            '<div v-bind:id="\'minbox_\'+min.type" '+
                'class="minbox"' +
                'v-bind:style="min.locked?\'display:none;\':\'display:block;\'" '+
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
    },
    // on mounted life cycle hook
    mounted: function(){
        console.log('mounted, started app loop');
        var lt = new Date(),
        game = this.$data;
        var loop = function(){
            var now = new Date(),
            secs = (now - lt) / 1000;
            gameMod.update(game, secs);
            setTimeout(loop, 33);
            lt = now;
        };
        loop();
    }
});
