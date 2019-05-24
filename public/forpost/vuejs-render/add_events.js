new Vue(
    {
        el: '#demo-render',
        render: function (createElement){
            return createElement('div', {on:{click:this.bar}},'foo');
        },
		methods: {
			bar: function(){
				console.log('foobar')
			}
		}
    }
);

