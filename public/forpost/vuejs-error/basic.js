Vue.config.errorHandler = function (err, vm, info) {

    conssole.log('what the?');
    console.log(err.message);

};

Vue.component('err', {
    template: '<div>{{ n }}</div>',
    data: function () {
        return {
            n: 0
        }
    }
});

var vm = new Vue({
    el: '#demo-error',
    template: '<err></err>'
});
