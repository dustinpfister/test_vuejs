
    Vue.component('sun-ui-canvas',{
        props: ['sun', 'sections'],
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

                this.$props.sections.forEach(function(sun){
                    ctx.fillStyle = 'blue';
                    ctx.beginPath();
                    ctx.arc(sun.x, sun.y, sun.r, 0, Math.PI * 2);
                    ctx.fill();
                });
            }
        }
    });
