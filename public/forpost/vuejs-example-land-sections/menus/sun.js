// main menu-sun component
Vue.component('menu-sun', {
    props: ['currentMenu', 'sun', 'sections'],
    data: function () {
        return {};
    },
    render: function(createElement){
        var children = [];
        var vm = this;
        if(this.$props.currentMenu === 'sun'){
            // push sun info
            children.push( createElement('sun-info', {props: this.$props}) );
            children.push( createElement('sun-ui-canvas', {props: this.$props}) );
            // push sun-ui-pos
            children.push( createElement('sun-ui-pos', {
                props: this.$props, 
                on: {
                    'set-sunpos-ad': function(a, b){
                        vm.setPos(a, b);
                    }
                }
             }));
        }
        return createElement('div', children);
    }
});
