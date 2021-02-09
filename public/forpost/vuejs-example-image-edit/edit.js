
new Vue({
    el: '#app',
    template: '<div>'+
        '<image-div-grid v-bind:img="imgs[currentImage]" v-on:px-click="pxClickHandler"></image-div-grid>'+
    '</div>',
    data: function(){
        return {
           currentImage: 0,
           imgs : [{
               width: 8,
               height: 8,
               pxSize: 32,
               palette: [false, 'white', 'black', 'red', 'lime', 'blue'],
               data: [
                   2,0,0,0,0,0,0,2,
                   0,0,0,0,0,0,0,0,
                   0,0,2,0,0,2,0,0,
                   0,0,2,3,3,2,0,0,
                   0,0,0,3,3,0,0,0,
                   0,0,2,0,0,2,0,0,
                   0,0,0,2,2,0,0,0,
                   2,0,0,0,0,0,0,2
               ]
           }]
        }
    },
    methods: {
        pxClickHandler: function(x, y){
            console.log(x, y);
        }
    }
});

/*
new Vue({
    el: '#app',
    render: function (createElement) {
        return createElement('div', {
            style: {
                position: 'relative',
                left: '0px'
            }
        }, [this.renderGrid(createElement), this.renderColorSel(createElement)]);
    },
    data: {
        width: 4,
        height: 4,
        currentColorIndex: 0,
        colors: ['white', 'red', 'green', 'blue']
    },
    methods: {
        createStyleObj: function (colorIndex, left, top) {
            var d = this.$data;
            return {
                position: 'absolute',
                width: '32px',
                height: '32px',
                background: d.colors[colorIndex],
                left: left + 'px',
                top: top + 'px',
                textAlign: 'center'
            };
        },
        renderColorSel: function (createElement) {
            var sel = [],
            div,
            cellOpt,
            d = this.$data,
            i = 0,
            len = d.colors.length;
            while (i < len) {
                cellOpt = {
                    style: this.createStyleObj(i, i % d.width * 32, 0),
                    on: {
                        click: this.setColor
                    }
                };
                div = createElement('div', cellOpt, i);
                sel.push(div);
                i += 1;
            }
            return createElement('div', {
                style: {
                    position: 'relative',
                    left: '0px',
                    top: '0px'
                }
            }, sel);
        },
        renderGrid: function (createElement) {
            var grid = [],
            div,
            cellOpt,
            d = this.$data,
            i = 0,
            len = d.width * d.height;
            while (i < len) {
                cellOpt = {
                    style: this.createStyleObj(1, i % d.width * 32, i % d.width * 32),
                    on: {
                        click: this.draw
                    }
                };
                cellOpt.style.top = (Math.floor(i / d.height) * 32) + 'px';
                div = createElement('div', cellOpt, 1);
                grid.push(div);
                i += 1;
            }
            return createElement('div', {
                style: {
                    position: 'relative',
                    left: '0px',
                    top: '64px'
                }
            }, grid);
        },
        setColor: function (e) {
            var div = e.target,
            d = this.$data;
            e.preventDefault();
            d.currentColorIndex = div.innerText;
            console.log(div)
        },
        draw: function (e) {
            var div = e.target,
            d = this.$data;
            e.preventDefault();
            div.innerText = this.$data.currentColorIndex;
            div.style.background = d.colors[d.currentColorIndex];
        }
    }
});
*/