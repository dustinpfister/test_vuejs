new Vue({
    el: '#demo-render',
    render: function (createElement) {
        return createElement(
            // tag name
            'p',
            // options
            {
                class: {
                    theClassName: true
                },
                style: {
                    color: 'red'
                }
            },
            // text node
            'red text');
    }
});
