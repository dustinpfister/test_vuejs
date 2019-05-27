Vue.config.errorHandler = function (err, vm, info) {
    conssole.log('what the?');
    console.log('so far it seems like this does not work');
    //console.log(err.message);

};

Vue.component('error-handler', {

    template:'<div><slot></slot></div>',
    errorCaptured: function (err, vm, info) {

        console.log('this does not work as well');

        return false;

    }
});

var vm = new Vue({
        el: '#demo-error',
		render: function(createElement){
			
			//throw new Error('nope');
			
			return createElement('error-handler',[createElement('foo')]);
			
		}
		
        //template: '<error-handler>foo</error-handler>',
    });
