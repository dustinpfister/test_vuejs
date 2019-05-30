var comp = {
    template: '<div><p>Foo</p></div>'
};
// so of course the vue name is undefined for now
console.log(comp.name); // undefined

// But when the component is made  global
// the first argument given is the name
Vue.component('foo', comp);
console.log(comp.name); // foo

// the name can then be used to refer
// to the component in templates
new Vue({
    el: '#demo-name',
    template: '<foo></foo>'
});
