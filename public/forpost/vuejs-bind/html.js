new Vue({
    el: '#demo-bind',
    template: '<div v-html="html"></div>',
    data: {
        html: 'This is some html'
    }
});
