Vue.component('foo', {
    template: '<div>' +
    '<slot name="title" ></slot>' +
    '<slot></slot>' +
    '<slot name="footer"></slot>' +
    '</div>'
})

new Vue({
    el: '#demo-slot',
    template: '<div>' +
    '<foo v-slot:title>Slots are fun</foo>' +
    '<foo>If no name is given then it is the defulat slot</foo>' +
    '<foo v-slot:footer>So names help with more than one slot</foo>' +
    '</div>'
});
