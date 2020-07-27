new Vue({
    el: '#app',
    render: function (createElement) {
        var grid = [],
        div,
        cellOpt,
        d = this.$data,
        i = 0,
        len = this.$data.width * this.$data.height;
        while (i < len) {
            cellOpt = {
                style: {
                    position: 'absolute',
                    width: '32px',
                    height: '32px',
                    background: d.colors[d.currentColorIndex],
                    left: (i % d.width * 32) + 'px',
                    top: (i % d.width * 32) + 'px',
                    textAlign: 'center'
                },
                on: {
                    click: this.draw
                }
            };
            cellOpt.style.top = (Math.floor(i / d.height) * 32) + 'px';
            div = createElement('div', cellOpt, 0);
            grid.push(div);
            i += 1;
        }
        return createElement('div', grid);
    },
    data: {
        width: 4,
        height: 4,
        currentColorIndex: 1,
        colors: ['white', 'red', 'green', 'blue']
    },
    methods: {
        draw: function (e) {

            console.log('good');

        }
    }
})
