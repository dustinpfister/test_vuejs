new Vue({
    el: '#list',
    template: '<ul><li v-for="kw in keywords" >{{ kw }}</li></ul>',
    data: {
        keywords: ['lodash find', 'canvas arc', 'vue for']
    }
});
