// Simple http get client for vuejs
// using XMLHttpRequest
var httpGet = (function ()
{

    var api =
    {

        get: function (opt)
        {

            opt = opt || {};
            opt.url = opt.url || '/';
            opt.beforeSend = opt.beforeSend || function (xhr)  {};
            opt.onDone = opt.onDone || function (res)
            {
                console.log(res);
            }
            opt.onError = opt.onError || function ()
            {
                console.log(this);
            }

            var xhr = new XMLHttpRequest();
            xhr.open('GET', opt.url);
            opt.beforeSend.call(this, xhr);
            xhr.onreadystatechange = function ()
            {

                console.log(this.readyState, this.status);

                if (this.readyState === 4 && this.status === 200)
                {
                    opt.onDone.call(this, this.response);
                }

                if (this.readyState === 4 && this.status === !200)
                {
                    opt.onError.call(this, this);
                };

            }

            xhr.send();
        }
    };

    // must have an install method
    api.install = function (Vue, opt)
    {

        opt = opt || {};
        opt.baseUrl = opt.baseUrl || '/';

        Vue.prototype.$httpGet = function (getOpt)
        {
            api.get(getOpt);
        }

    };

    return api;

}
    ());
