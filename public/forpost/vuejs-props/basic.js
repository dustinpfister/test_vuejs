Vue.component('custom', {
    props: ['foo'],
    template: '<div>{{ foo }}</div>'
});

new Vue({
    el: '#demo-props',
    template: '<div><custom foo="baz"></custom><custom></custom></div>'
});
