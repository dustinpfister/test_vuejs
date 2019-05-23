var vm = new Vue({
        el: '#demo-nexttick',
        template: '<p>{{ mess }}</p>',
        data: {
            mess: 'bar'
        },
        methods: {
            setMess: function (mess) {
                var self = this;
                self.mess = mess;
                // The $nextTick instance method can
                // also be used
                self.$nextTick(function () {
                    console.log(self.$el.textContent); // 'foo'
                });
            }
        }
    });
vm.setMess('foo');
