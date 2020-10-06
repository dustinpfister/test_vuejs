var Mod = (function () {

    var api = {};

    api.create = function () {

        return {
            count: 0
        }

    };

    api.update = function (state) {

        state.count += 1;

    };

    api.template = '<div><input type="button" value="step" v-on:click="update"><span> {{count}} </span></div>';

    return api;

}
    ());
