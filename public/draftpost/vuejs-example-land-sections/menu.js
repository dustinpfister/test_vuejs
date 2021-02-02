
(function(){

var SUN_RADIUS = 16,
CENTERX = 0,
CENTERY = 0,
SECTION_DIST = 100;

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
  return sections;
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
                   //money: vm.$data.money,
                   currentMenu: vm.$data.currentMenu,
                   sun: vm.$data.sun,
                   sections: vm.$data.sections
                },
                on: {
                    'set-sunpos-ad': vm.setSunPosAD
                }
            }));
        });
        children.push(createElement('div', {class:'wrap_menu'}, menus));
        return createElement('div', {class:'wrap_main'}, children);
    },
    data: {
        menus: ['home', 'sun', 'sections'],
        sections: createSections(),
        currentMenu: 'sections',
        sun: {
           x: CENTERX,
           y: CENTERY,
           r: SUN_RADIUS,
           a: 0,     // angle from center point (0,0)
           dist: 0,
           MAXDIST: SECTION_DIST
        },
        money: 0
    },
    mounted: function(){
        this.setSunPosAD(Math.PI / 180 * 20, 50);
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
        // set sun position with the given angle and dist
        setSunPosAD: function(a, d){
            var sun = this.$data.sun;
            sun.dist = d;
            sun.dist = sun.dist < 0 ? 0 : sun.dist;
            sun.dist = sun.dist > sun.MAXDIST ? sun.MAXDIST : sun.dist;
            sun.a = a;
            sun.x = Math.round(CENTERX + Math.cos(sun.a) * sun.dist);
            sun.y = Math.round(CENTERY + Math.sin(sun.a) * sun.dist);
        },
        deltaMoney: function(a){
            console.log('delta money event', a);
            this.$data.money += a;
        }
    }
});

}());
