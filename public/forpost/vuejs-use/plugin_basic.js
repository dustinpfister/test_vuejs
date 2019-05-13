var basic ={
    // a Vue.js plug in must have an install property
    // that is a function. Vue and an optional options
    // object will be passed
    install: function (Vue, opt){
        // can define instance methods this way
        Vue.prototype.$foo = function (){
            return 'foobar';
        }
    }
};
