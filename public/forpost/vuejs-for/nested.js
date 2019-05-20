new Vue({
    el: '#list',
    template: '<ul>' +
    '<li v-for="(cat,ci) in cats" >{{ ci+1 }} ) {{ cat.name }}</li>' +
    '</ul>',
    data: {
        cats: [{
                name: 'lodash',
                keywords: ['lodash find', 'lodash map']
            }, {
                name: 'vue',
                keywords: ['vue for']
            },
        ]

    }
});
