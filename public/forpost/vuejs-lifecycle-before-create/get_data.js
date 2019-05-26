new Vue({
    el: '#demo-lifecycle-before-create',
    template: '<p>n:{{ n }} mess: {{ eMess }}</p>',
    data: {
        n: null,
        eMess: ''
    },
    beforeCreate: function () {

        // define a default data object
        this.defaultData = {
            n: 21,
            eMess: 'Default data is used'
        };

    },
    created: function () {

        var self = this;

        fetch('/data')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            self.n = data.n;
        })
        .catch (function (error) {
            self.$data.n = self.defaultData.n;
            self.$data.eMess = self.defaultData.eMess;
        });

        // the data object is not created
        //console.log(this.fooData)
        //console.log(this.$data.n); // 42
    }
});
