Vue.mixin({
    created: function () {
        var startMess = this.$options.startMess;
        console.log(this.$data.mess);
        if (startMess) {
            //console.log(startState);
            this.$data.mess = startMess;
        } else {
            this.$data.mess = 'no start mess option given.';
        }
    }
})

new Vue({
    el: '#one',
    data: {
        mess: '' // 'hello'
    },
    startMess : 'hello'
});

new Vue({
    el: '#two',
    data: {
        mess: '' // 'no start mess option given'
    }
});
