var vm = new Vue({
        template: '<p>time: {{ time }}</p>',
        data: {
            st: 0,
            time: 0
        },
        // created lifecycle hook
        created: function () {
            // called right away
            console.log('created');
            this.$data.st = Date.now();
        },
        // mounted lifecycle hook
        mounted: function () {
            // called after $mount because no
            // el option is given
            console.log('mounted');
            this.$data.time = Date.now() - this.$data.st;
        }
    });

setTimeout(function () {
    vm.$mount('#demo-lifecycle-created')
}, 2500);
