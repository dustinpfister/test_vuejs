
Vue.directive('tobin', {
    bind: function (el, binding, vnode) {

        if (!el.dataset.text) {
            el.dataset.text = el.innerText;
        }
        el.innerText = [].map.call(el.dataset.text, (c) => {
            return c.charCodeAt(0).toString(2);
        }).join('');

    }
});

var vm = new Vue({
        el: '#content'
    });
