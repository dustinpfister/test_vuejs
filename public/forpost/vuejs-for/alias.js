new Vue({
    el: '#list',
    template: '<ul><li v-for="( kw, i) in keywords" >{{ i + 1 }} )  {{ kw }}</li></ul>',
    data: {
        keywords: ['lodash find', 'canvas arc', 'vue for']
    }
});
