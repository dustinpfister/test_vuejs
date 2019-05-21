new Vue({
    el: '#demo-if',
    template: '<div>' +
    '<p v-if=" typeof n === \'number\'" >{{ n.toFixed(2) }}</p>' +
    '<p v-if=" typeof n === \'string\'" >{{ n }}</p>' +
    '</div>',
    data: {
        n: Math.PI
    }
});
