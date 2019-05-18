Vue.component('custom', {
    props: {
        foo: {
        default:
            'foobar'
        }
    },
    template: '<div>{{ foo }}</div>'
});

new Vue({
    el: '#demo-props',
    template: '<div>' +
    '<custom foo="baz"></custom>' + // 'baz'
    '<custom></custom>' + // 'foobar'
    '</div>'
});
