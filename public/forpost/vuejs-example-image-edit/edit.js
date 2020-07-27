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
        renderColorSel: function (createElement) {
            var sel = [],
            div,
            cellOpt,
            d = this.$data,
            i = 0,
            len = d.colors.length;
            while (i < len) {
                cellOpt = {
                    style: {
                        position: 'absolute',
                        width: '32px',
                        height: '32px',
                        background: d.colors[i],
                        left: (i % d.width * 32) + 'px',
                        top: '0px',
                        textAlign: 'center'
                    },
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
                    style: {
                        position: 'absolute',
                        width: '32px',
                        height: '32px',
                        background: 0,
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
})
