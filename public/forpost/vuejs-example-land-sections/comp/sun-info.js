
// sun-info component
Vue.component('sun-info',{
    props: ['sun'],
    template: '<div class="menu_item"><h3>Sun Info</h3><p>position: {{ sun.x }}, {{ sun.y}}</p></div>'
});
