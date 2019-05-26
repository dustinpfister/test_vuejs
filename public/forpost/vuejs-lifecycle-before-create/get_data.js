new Vue({
    el: '#demo-lifecycle-before-create',
    template: '<div><span>n:{{ n }} </span><br><span> mess: {{ mess }}</span></div>',
    data: {
        n: null,
        mess: ''
    },

    // default create hook
    beforeCreate: function () {
        // define hard coded data object
        this.hardData = {
            n: 21,
            mess: 'hard coded data is used'
        };
    },

    // create hook
    created: function () {
        var self = this;
        // fetch data
        fetch('/data')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // if all goes well use that
            self.$data.n = data.n;
            self.$data.mess = 'Got data from back end';
        })
        .catch (function (e) {
            // else use hard data
            self.$data.n = self.hardData.n;
            self.$data.mess = self.hardData.mess + ' : ' + e.message;
        });
    }
});
