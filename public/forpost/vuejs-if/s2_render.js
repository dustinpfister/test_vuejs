new Vue({
    el: '#demo-if',
    render: function (createElement) {
        return createElement('div',[createElement('p', typeof this.n === 'number' ? this.n.toFixed(2) : this.n)])
    },
    data: {
        n: Math.PI
    }
});
