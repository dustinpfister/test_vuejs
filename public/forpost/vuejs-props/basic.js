Vue.component('custom', {
    props: ['foo'],
    template: '<div>{{ foo }}</div>'
});

new Vue({
    el: '#demo-props'
});
