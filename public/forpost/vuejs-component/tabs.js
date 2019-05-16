Vue.component('tab', {
    template: '<div v-on:click="clicked" v-bind:style="tab_style" ><slot></slot></div>',
    data: function () {
        return {
            tab_style: 'display:inline-block;padding:5px;margin:2px;outline:1px solid red;'
        }
    },
    methods: {
        clicked: function (e) {
            console.log(e.target.parentNode.children);
        }
    }
});

Vue.component('tabs', {
    render: function (createElement) {

        var tabs = ['foo', 'bar'],
        children = [];
        tabs.forEach(function (tabName) {
            children.push(createElement('tab', {
                    class: 'tabs_tab'
                }, tabName));
        });
        var disp = createElement('div', {
                class: 'tabs_content'
            }, 'foo');
        console.log(disp);
        //disp.elm
        children.push(disp);
        return createElement('div', children);

    },
    data: function () {
        return {
            content: 'This is some default content'
        }
    }
});

new Vue({
    el: '#tabs-demo'
})
