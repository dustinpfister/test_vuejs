new Vue({
    el: '#app',
    render: function (createElement) {
        var grid = [],
        div,
        cellOpt,
        i = 0,
        len = this.$data.width * this.$data.height;
        while (i < len) {
            cellOpt = {
                style: {
                    position: 'absolute',
                    width: '32px',
                    height: '32px',
                    background: 'red'
                }
            };
            cellOpt.style.left = (i % this.$data.width * 32) + 'px';
            cellOpt.style.top = (Math.floor(i / this.$data.height) * 32) + 'px';
            div = createElement('div', cellOpt, '');
            grid.push(div);
            i += 1;
        }
        return createElement('div', grid);
    },
    data: {
        width: 4,
        height: 4,
    },
    methods: {}
})
