// very simple component with a slot
Vue.component('foo', {
    template: '<div><slot></slot></div>'
})

// a Vue instance using the component element
// that has some inner content in the form of a
// simple text node
new Vue({
    el: '#demo-data',
    template: '<foo>hello</foo>',
    data: {
        foo: 'bar'
    }
});
