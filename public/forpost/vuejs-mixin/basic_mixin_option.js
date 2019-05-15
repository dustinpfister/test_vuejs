// Vue Instance with a Mixin that
// gives vue an custom option
new Vue({
    el: '#one',
    mixins: [
        // a mixin for just this view
        {
            created: function () {
                var startMess = this.$options.startMess;
                console.log(this.$data.mess);
                if (startMess) {
                    this.$data.mess = startMess;
                } else {
                    this.$data.mess = 'no start mess option given.';
                }
            }
        }
    ],
    data: {
        mess: '' // 'hello'
    },
    startMess: 'hello'
});

// Another Vue instance that does not have the mixin, so the
// option does not do anything.
new Vue({
    el: '#two',
    data: {
        mess: 'foo' // 'foo'
    },
    startMess: 'nope this no work, not a global mixin'
});
