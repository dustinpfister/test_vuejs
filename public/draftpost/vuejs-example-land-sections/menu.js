var createSections = function(){
  var i = 0,
  sections = [];
  while(i < 12){
     sections.push({
        distance: 0,
        per: 0
     });
     i += 1;
  }
};


var vm = new Vue({
    el: '#app',
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
            menus.push(createElement('menu-' + menuName, {
                props:{
                   money: vm.$data.money,
                   currentMenu: vm.$data.currentMenu
                },
                on: {
                    'delta-money': vm.deltaMoney
                }
            }));
        });
        children.push(createElement('div', {class:'wrap_menu'}, menus));
        return createElement('div', {class:'wrap_main'}, children);
    },
    data: {
        menus: ['home', 'sections'],
        sections: createSections(),
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
