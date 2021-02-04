
(function(){

    // common set of methods
    var methods = {
        setA: function(e){
             this.setPos(Math.PI / 180 * e.target.value, this.$props.sun.dist);
        },
        setD: function(e){
             this.setPos(this.$props.sun.a, e.target.value);
        },
        center: function(e){
            this.$emit('set-sunpos-ad', 0, 0);
        },
        setPos: function(a, d){
            this.$emit('set-sunpos-ad', Number(a), Number(d));
        }
    };

    Vue.mixin({methods : methods});

    // sun-info component
    Vue.component('sun-info',{
        props: ['sun'],
        template: '<div class="menu_item"><h3>Sun Info</h3><p>position: {{ sun.x }}, {{ sun.y}}</p></div>'
    });

    // text input ui
    Vue.component('sun-ui-pos',{
        props: ['sun'],
        template: '<div class="menu_item">'+
            '<h3>Change Sun Position</h3>'+
            '<p>Angle: <input type="text" v-bind:value="sun.a / (Math.PI * 2) * 360" v-on:keyup="setA"></p>'+
            '<p>Distance: <input type="text" v-bind:value="sun.dist" v-on:keyup="setD"></p>'+
            '<p><input type="button" value="center" v-on:click="center"></p>'+
        '</div>'
    });

    // main menu-sun component
    Vue.component('menu-sun', {
        props: ['currentMenu', 'sun', 'sections'],
        data: function () {
            return {};
        },
        render: function(createElement){

            var children = [];
            var vm = this;
            if(this.$props.currentMenu === 'sun'){
                // push sun info
                children.push( createElement('sun-info', {props: this.$props}) );
                children.push( createElement('sun-ui-canvas', {props: this.$props}) );
                // push sun-ui-pos
                children.push( createElement('sun-ui-pos', {
                    props: this.$props, 
                    on: {
                        'set-sunpos-ad': function(a, b){
                            vm.setPos(a, b);
                        }
                    }
                 }));
            }
            return createElement('div', children);
        }
    });
}());