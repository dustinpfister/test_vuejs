
Vue.config.errorHandler = function (err, vm, info) {

    console.log('');
    console.log('ERROR:');
    console.log(err.message);
    console.log('');

};

Vue.component('item', {
    props: ['item'],
    template: '<div>{{ item.age }}</div>',

});

new Vue({
    el: '#demo-error',
    template: '<ul><li is="item" v-for="item in items" :item="item"></li></ul>',
    data: {
        items: [{
                name: 'Tom',
                age: 5,
                food: {
                    amount: 10
                }
            }, {
                name: 'Jerry',
                age: 15, // food object is missing
                //food:{
                //	amount:5
                //}
            }
        ]
    },
});
