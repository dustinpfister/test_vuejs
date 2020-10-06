var Mod = (function () {
    var api = {};
    // create a state object
    api.create = function () {
        return {
            count: 0
        }
    };
    // update a state object
    api.update = function (state) {
        state.count += 1;
    };
    // a vuejs template
    api.template = '<div><input type="button" value="step" v-on:click="update"><span> {{count}} </span></div>';
    return api;
}
    ());
