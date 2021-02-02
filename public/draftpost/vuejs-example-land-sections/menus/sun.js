
(function(){

    // sun-info component
    Vue.component('sun-info',{
        props: ['sun'],
        template: '<div> position: {{ sun.x }}, {{ sun.y}} </div>'
    })

    // main menu-sun component
    Vue.component('menu-sun', {
        props: ['currentMenu', 'sun'],
        data: function () {
            return {};
        },
        render: function(createElement){

            var children = [];
            var vm = this;
            if(this.$props.currentMenu === 'sun'){
                // push sun info
                children=[[createElement('sun-info', {props: this.$props})]]
                // center button
                children.push(createElement('input', {
                    attrs: {
                        type: 'button',
                        value: 'center'
                    },
                    on: {
                        click: this.center
                    }
                }));
                children.push(createElement('input', {
                    attrs: {
                        type: 'text',
                        value: vm.$props.sun.a / (Math.PI * 2) * 360
                    },
                    on: {
                        keyup: function(e){
                            console.log('key down');
                            console.log(e.target.value);
                            vm.setPos(Math.PI / 180 * e.target.value, vm.sun.dist);
                        }
                    }
                }));
            }
            return createElement('div', children);
        },
        methods: {
            center: function(e){
                this.$emit('set-sunpos-ad', 0, 0);
            },
            setPos: function(a, d){
                this.$emit('set-sunpos-ad', Number(a), Number(d));
            }
        }
    });
}());