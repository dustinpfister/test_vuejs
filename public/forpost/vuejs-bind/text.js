new Vue({
    el: '#demo-bind',
    template: '<div>' +
    '<p v-bind:style="red">{{ mess1 }}</p>' +
    '<p v-text=\"mess2\"></p>' +
    '</div>',
    data: {
        mess1: 'mustachen syntax',
        mess2: 'text directive'
    }
});
