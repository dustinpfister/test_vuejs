// Simple http get client for vuejs
// using XMLHttpRequest
var get = (function ()
{

    var api = {};

    // must have an install method
    api.install = function (Vue, opt)
    {

        opt = options || {};
        opt.baseUrl = opt.baseUrl || '/';

        Vue.prototype.$myMethod = function (opt)
        {
            // some logic ...
        }

    };

    return api;

}
    ());
