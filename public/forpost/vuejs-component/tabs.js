Vue.component('tab', {
    template: '<div v-on:click="clicked" v-bind:style="tab_style" ><slot></slot></div>',
    data: function () {
        return {
            tab_style: 'display:inline-block;padding:5px;margin:2px;outline:1px solid red;'
        }
    },
    methods: {
        clicked: function (e) {

            console.log(e.target.parentNode);
        }
    }
});

Vue.component('tabs', {
    render: function (createElement) {

        let tabs = ['foo', 'bar'],
        children = [];
        tabs.forEach(function (tabName) {
            children.push(createElement('tab', tabName));
        });
        return createElement('div', children);

    },
    data: function () {
        return {
            content: 0
        }
    }
});

new Vue({
    el: '#tabs-demo'
})
