new Vue({
    template: '<p>time: {{ time }}</p>',
    el: '#demo-lifecycle-created',
    data: {
        st: 0,
        time: 0
    },
    // vue create is called synchronously
    created: function () {
        // so this will delay the mount hook
        var i = Math.pow(10, 9),
        st = Date.now();
        while (i--) {};
        this.$data.time = Date.now() - st;
    },
    mounted: function () {
        console.log('mounted');
    }
});
