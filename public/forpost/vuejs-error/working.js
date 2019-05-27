// https://jsfiddle.net/Linusborg/z84wspcg/
Vue.config.errorHandler = function (err, vm, info) {

    let handler,
    current = vm;
    if (vm.$options.errorHandler) {
        handler = vm.$options.errorHandler
    } else {
        while (current.$parent) {
            current = current.$parent;
            if (handler = current.$options.errorHandler) {
                break
            }
        }
    }
    if (handler) {
        handler.call(current, err, vm, info)
    } else {
        console.log(err)
    }

};

Vue.component('error-display', {
    props: ['msg'],
    template: '<component is=\"li\" class=\"error\">{{msg}}</component>'
});

Vue.component('item', {
    props: ['item'],
    data() {
        return {
            dataError: false
        }
    },
    template:
    '<li v-if=\"!dataError\">' +
    '{{ item.name }} ({{ item.age }}) - Food amount: {{ item.food.amount }}' +
    '</li>' +
    '<error-display v-else tag=\"li\" msg=\"Missing data, can\'t show item\"/>',

    errorHandler: function (err, vm, info) {
        console.log('error in item:');
        this.dataError = true
    }
});

new Vue({
    el: '#app',
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
            }
        ]
    },
});
