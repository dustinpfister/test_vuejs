
Vue.config.errorHandler = function (err, vm, info) {

    console.log('');
    console.log('ERROR:');
    console.log(err.message);
    console.log('');

};

Vue.component('point', {
    props: ['point'],
    template: '<div>x: {{ point.x }} y: {{ point.deltas.x }}</div>',
});

new Vue({
    el: '#demo-error',
    template: '<div><p is="point" v-for="point in points" :point="point"></p></div>',
    data: {
        points: [ 
        {x:40,y:5,deltas:{x:0,y:0}},
        {x:5,y:32,deltas:{x:1,y:2}},
        {x:40,y:5}]
    },
});
