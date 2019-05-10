
new Vue({
    el: '#bar',
    data: {
        mess: 'bar'
    },
    filters: {
        fooanate: function (val) {
            return 'foo' + val;
        }
    }
});
