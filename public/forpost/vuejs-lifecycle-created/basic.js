var vm = new Vue({
        el: '#demo-lifecycle-created',
        template: '<p>n: {{ n }}</p>',
        data: {
            n: 4
        },

        // created lifecycle hook
        created: function () {
            console.log('**** CREATED ****');
            console.log(this.$data.n); // 4
            console.log(this.$el); // undefined
            console.log('*****************');
        },

        mounted: function () {
            console.log('**** MOUNTED ****');
            console.log(this.$el.textContent); // n: 4
            console.log('*****************');
        }

    });
