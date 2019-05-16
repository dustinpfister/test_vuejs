Vue.component('tab', {
    template: '<p><slot></slot></p>',
    data: function () {

        console.log(this);

        return {
            i: 0
        }
    }
});

Vue.component('tabs', {
    render: function (createElement) {

        console.log()

        let tabs = ['foo', 'bar'],
        children = [];
        tabs.forEach(function (tabName) {
            children.push(createElement('tab', tabName));
        });
        return createElement('div', children);

    },
    data: function () {
        return {
            i: 0
        }
    }
});

new Vue({
    el: '#tabs-demo'
})
