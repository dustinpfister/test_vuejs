Vue.component('tab', {
    template: '<div v-bind:style="tab_style" ><slot></slot></div>',
    data: function () {
        return {
            tab_style: 'display:inline-block;padding:5px;margin:2px;outline:1px solid red;'
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
