Vue.component('sun-ui-canvas',{
    props: ['sun', 'sections'],
    data: function(){
        return {
           down: false,
           canvasObj: null,
           canvas: null,
           ctx: null
        };
    },
    template: '<div class="menu_item">'+
        '<h3>Sun Position canvas</h3>'+
        '<p>mousedown: {{ down }}<p>' +
        '<div id="canvas-app-sun-pos"></div>' +
    '</div>',
    mounted: function(){
        var vm = this;
        var dat = vm.$data,
        sun = vm.$props.sun;
        dat.canvasObj = utils.createCanvas({
            container: document.getElementById('canvas-app-sun-pos'),
            width: 320,
            height: 240
        });
        dat.canvas = dat.canvasObj.canvas;
        dat.ctx = dat.canvasObj.ctx;

        var pointerDown = function(){
           dat.down = true;
        };
        var pointerUp = function(){
           dat.down = false;
        };
        var pointerMove = function(e){
           e.preventDefault();
           if(dat.down){
               var pos = utils.getCanvasRelative(e),
               a = Math.atan2(sun.cy - pos.y, sun.cx - pos.x) + Math.PI,
               d = utils.distance(pos.x, pos.y, sun.cx, sun.cy);
               vm.$emit('set-sunpos-ad', Number(a), Number(d));
           }
        };

        dat.canvas.addEventListener('mousedown', pointerDown);
        dat.canvas.addEventListener('mouseup', pointerUp);
        dat.canvas.addEventListener('mousemove', pointerMove);
        dat.canvas.addEventListener('touchstart', pointerDown);
        dat.canvas.addEventListener('touchend', pointerUp);
        dat.canvas.addEventListener('touchmove', pointerMove);
        vm.draw();
    },
    watch: {
        sun: {
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
            // background
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, dat.canvas.width, dat.canvas.height);
            // small dot in center
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(sun.cx, sun.cy, 2, 0, Math.PI * 2);
            ctx.fill();
            // sun
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.arc(sun.x, sun.y, sun.r, 0, Math.PI * 2);
            ctx.fill();
            // draw sections
            this.$props.sections.forEach(function(sun){
                ctx.fillStyle = 'blue';
                ctx.beginPath();
                ctx.arc(sun.x, sun.y, sun.r, 0, Math.PI * 2);
                ctx.fill();
            });
        }
    }
});
