var Foo = {
    template: '<span>Foo</span>'
};
var Bar = {
    name: 'bar',
    template: '<span>Bar</span>'
};

// using components locally
new Vue({
    el: '#demo-name',
    template: '<div><foo></foo><bar></bar></div>',
    components: {
        foo: Foo,
        bar: Bar
    },
    mounted: function () {
        // when using a component locally the key name used
        // in the components option seems to work in templates
        // but no name property is defined in the object like
        // when it is added globally
        console.log(Foo.name); // undefined
        console.log(Bar.name); // 'bar'
    }
});
