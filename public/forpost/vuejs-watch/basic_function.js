var vm = new Vue({
        el: '#demo-watch',
        template: '<div><p> ( {{ x }} , {{ y }} )</p>' +
        '<p>{{ mess }}</p></div>',
        data: {
            x: 40,
            y: 2,
            mess: ''
        },
        watch: {
            x: function (newVal, oldVal) {
                //console.log('x changed');
                this.$data.mess = 'x has been changed from ' +
                    oldVal + ' to ' + newVal;
            }
        }
    });

// manual change
vm.x =  - 25;
