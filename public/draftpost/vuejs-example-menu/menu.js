var vm = new Vue({
    el: '#app',
/*
    template: '<div class="wrap_main">' +
        '<div class="navbar">'+
            '<input id="button_changemenu_home" type="button" v-on:click="click" value="home">' +
            '<input id="button_changemenu_other1" type="button" v-on:click="click" value="other1">' +
        '</div>'+
        '<div class="wrap_menu">' +
            '<menu-home v-bind:money="money" v-bind:currentMenu="currentMenu" v-on:delta-money="deltaMoney"></menu-home>'+
            '<menu-other1 v-bind:money="money" v-bind:currentMenu="currentMenu" v-on:delta-money="deltaMoney"></menu-other1>'+
        '</div>'+
    '</div>'+
    '</div>',
*/
    render: function(createElement){
        var vm = this;
        var children = [];
        var menuButtons = [];
        ['home', 'other1'].forEach(function(menuName){
            menuButtons.push(createElement('input', {
                attrs:{
                    id:'button_changemenu_' + menuName,
                    type:'button',
                    value: menuName
                },
                on: {
                    'click': vm.click
                }
            }));
        });
        children.push(createElement('div', {class:'navbar'}, menuButtons));
        return createElement('div', {class:'wrap_main'}, children);
    },
    data: {
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
