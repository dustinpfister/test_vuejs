
(function(){

    var CENTERX = 160,
    CENTERY = 120,
    SECTION_DIST = 100,
    SECTION_RADIUS = 16,
    SECTION_TEMP_KELVIN_MIN = 0,    // Think in kelvin when it comes to a standard unit for temp
    SECTION_TEMP_KELVIN_MAX = 5778,
    SUN_RADIUS = 16,
    SUN_MAXDIST = SECTION_DIST - SUN_RADIUS - SECTION_RADIUS;

    var maps = [
        '0,0,0,0,0,0,0,0,0,0,' +
        '0,0,0,0,0,0,0,0,0,0,' +
        '0,0,0,0,0,0,0,0,0,0,' +
        '0,0,0,0,0,0,0,0,0,2,' +
        '0,0,0,0,0,0,0,0,0,2,' +
        '0,0,0,0,0,0,0,0,2,2,' +
        '0,0,0,0,0,0,0,2,2,3',

        '0,0,2,0,0,0,0,2,2,2,' +
        '0,2,3,2,0,0,0,2,2,2,' +
        '0,0,3,0,0,0,2,2,2,2,' +
        '0,0,0,0,0,0,2,2,2,2,' +
        '2,0,0,0,0,0,2,2,2,2,' +
        '2,2,0,0,0,0,2,2,2,2,' +
        '3,2,2,0,0,0,0,2,2,2',

        '2,2,2,2,2,2,2,2,2,2,' +
        '2,2,2,2,2,2,2,2,2,2,' +
        '2,2,2,2,2,2,2,2,2,2,' +
        '2,2,2,2,2,2,2,2,2,2,' +
        '2,2,2,2,2,2,2,2,2,2,' +
        '2,2,2,2,2,2,2,2,2,2,' +
        '2,2,2,2,2,2,2,2,2,2',

        '2,0,0,0,0,0,0,0,0,0,' +
        '2,0,0,0,0,0,0,0,0,0,' +
        '2,0,0,0,0,0,0,0,0,0,' +
        '2,2,0,0,0,0,0,0,0,0,' +
        '2,2,0,0,0,0,0,0,0,0,' +
        '2,2,0,0,0,0,0,0,0,0,' +
        '2,2,2,0,0,0,0,0,0,0'

    ];

    var createGrid = function(indexString){
        indexString = indexString || '';
        var grid = {
            w: 10,
            h: 7,
            cells: []
        },
        i = 0,
        len = grid.w * grid.h,
        indexArr = indexString.split(',')
        while(i < len){
            grid.cells.push({
               i: i,
               x: i % grid.w,
               y: Math.floor(i / grid.w),
               itemIndex: indexArr[i] || 0
            });
            i += 1;
        }
        return grid;
    };


    // create sections array
    var createSections = function(){
        var i = 0,
        radian,
        sections = [];
        while(i < 12){
            radian = utils.pi2 * (i / 12);
            sections.push({
                i: i,
                x: CENTERX + Math.cos(radian) * SECTION_DIST,
                y: CENTERY + Math.sin(radian) * SECTION_DIST,
                r: SECTION_RADIUS,
                distance: 0,
                per: 0,
                temp: {
                    per: 0,
                    kelvin: 0,
                    displayUnit: 'fahrenheit',
                    displayTemp: 0
                },
                grid: createGrid(maps[i])
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
            menus: ['home', 'sun', 'sections', 'sections-table'],
            sections: createSections(),
            currentMenu: 'sections-table',
            sun: {
               cx: CENTERX,
               cy: CENTERY,
               x: CENTERX,
               y: CENTERY,
               r: SUN_RADIUS,
               a: 0,     // angle from center point (0,0)
               dist: 0,
               MAXDIST: SUN_MAXDIST
            }
        },
        mounted: function(){
            this.setSunPosAD(Math.PI / 180 * 20, 50);
            this.updateSections();
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
                this.updateSections();
            },
            // update sections based on current sun position
            updateSections: function(){
                var dat = this.$data,
                sun = dat.sun;
                dat.sections = dat.sections.map(function(section){
                    section.distance = utils.distance(section.x, section.y, sun.x, sun.y);
                    section.per = 1 - section.distance / (SECTION_DIST * 2);
                    // temp
                    var temp = section.temp;
                    temp.kelvin = SECTION_TEMP_KELVIN_MIN + section.per * SECTION_TEMP_KELVIN_MAX;
                    temp.per = temp.kelvin / SECTION_TEMP_KELVIN_MAX;
                    // display unit defaults to kelvin
                    temp.displayTemp = temp.kelvin
                    if(temp.displayUnit = 'fahrenheit'){
                        temp.displayTemp = (temp.kelvin - 273.15) * 9 / 5 + 32;
                    }
                    return section;
                });
            }
        }
    });

}());
