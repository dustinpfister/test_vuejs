var vm = new Vue({
    el: '#app',
    template: '<div class="wrap_main">' +
        '<div class="navbar">'+
            '<input id="button_changemenu_home" type="button" v-on:click="click" value="home">' +
            '<input id="button_changemenu_other1" type="button" v-on:click="click" value="other1">' +
        '</div>'+
        '<div class="wrap_menu">' +
            '<menu-home v-bind:money="money" v-bind:currentMenu="currentMenu" v-on:delta-money="deltaMoney"></menu-home>'+
        '</div>'+
        //'<div class="wrap_menu" v-if="currentMenu===\'other1\'">' +
        //     '<menu-other1 v-bind:money="money" v-on:delta-money="deltaMoney"></menu-other1>'+
        //'</div>'+
    '</div>'+
    '</div>',
    data: {
        menus: ['home', 'other1'],
        currentMenu: 'home',
        money: 0
    },
    methods: {
        // a button was clicked
        click: function (e) {
            var button_el = e.target,
            dat = this.$data,
            idArr = button_el.id.split('_');
            console.log(idArr);
            if(idArr[1] === 'changemenu'){
                dat.currentMenu = idArr[2];
            }
        },
        deltaMoney: function(a){
            console.log('delta money event', a);
            this.$data.money += a;
        }
    }
});
