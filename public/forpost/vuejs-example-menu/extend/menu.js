var Menu = Vue.extend({
    render: function(createElement){
        var vm = this;
        var children = [];
        // create menu buttons
        var menuButtons = [];
        vm.$data.menus.forEach(function(menuName){
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
        // create menus
        var menus = [];
        vm.$data.menus.forEach(function(menuName){
console.log(vm.$data.currentMenu);
            menus.push(createElement('menu-' + menuName, {
                props:{
                   state: vm.$data.state,
                   //money: vm.$data.money,
                   currentMenu: vm.$data.currentMenu
                },
                on: {
                    //'delta-money': vm.deltaMoney
                }
            }));
        });
        children.push(createElement('div', {class:'wrap_menu'}, menus));
        return createElement('div', {class:'wrap_main'}, children);
    },
    data: function(){
        return {
            menus: ['home'],
            currentMenu: 'home',
            money: 0,
            state: {
                money: 10
            }
        };
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
        }
    }
});
