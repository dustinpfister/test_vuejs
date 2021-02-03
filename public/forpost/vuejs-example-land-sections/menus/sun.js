
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
        '</div>',
        methods: methods
    });

    Vue.component('sun-ui-canvas',{
        props: ['sun'],
        mixins: [methods],
        data: function(){
            return {
               canvasObj: null,
               canvas: null,
               ctx: null
            };
        },
        template: '<div class="menu_item">'+
            '<h3>Sun Position canvas</h3>'+
            '<div id="canvas-app-sun-pos"></div>' +
            '<button v-on:click="draw()">draw</button>' +
        '</div>',
        mounted: function(){
            var dat = this.$data;
            dat.canvasObj = utils.createCanvas({
                container: document.getElementById('canvas-app-sun-pos'),
                width: 320,
                height: 240
            });
            dat.canvas = dat.canvasObj.canvas;
            dat.ctx = dat.canvasObj.ctx;
            this.draw();
        },
        watch: {
            sun: {
            //immediate: true,
            deep: true,
            handler(newValue, oldValue) {
                this.draw();
            }
        }
        },
        methods: {
            draw : function(){
                var dat = this.$data,
                ctx = dat.ctx,
                sun = this.$props.sun;
                ctx.fillStyle = 'black';
                ctx.fillRect(0, 0, dat.canvas.width, dat.canvas.height);

                ctx.fillStyle = 'yellow';
                ctx.beginPath();
                ctx.arc(sun.x, sun.y, sun.r, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    });

    // main menu-sun component
    Vue.component('menu-sun', {
        props: ['currentMenu', 'sun'],
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
        },
        methods: methods
    });
}());