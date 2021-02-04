
// sun-info component
Vue.component('sun-info',{
    props: ['sun'],
    template: '<div class="menu_item"><h3>Sun Info</h3><p>position: {{ sun.x }}, {{ sun.y}}</p></div>'
});

// text input ui
Vue.component('sun-ui-pos',{
    props: ['sun'],
    template: '<div class="menu_item">'+
        '<h3>Change Sun Position</h3>'+
        '<p>Angle: <input type="text" v-bind:value="sun.a / (Math.PI * 2) * 360" v-on:keyup="setA"></p>'+
        '<p>Distance: <input type="text" v-bind:value="sun.dist" v-on:keyup="setD"></p>'+
        '<p><input type="button" value="center" v-on:click="center"></p>'+
    '</div>'
});