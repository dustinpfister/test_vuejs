var vm = new Vue({
        el: '#demo-lifecycle-created',
        template: '<p>{{ n }}</p>',
        data: {
            n: 4
        },
        created: function () {
            console.log('created');
        }
    });
