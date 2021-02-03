
// Buy a WebAsset object
Vue.component('webassets-ui-buy', {
    props: ['state'],
    data: function(){
        return {
            forSale: [WebAsset(), WebAsset()]
        }
    },
    template: '<div class="ui">'+
        '<h3>Buy Website: </h3>'+
        '<div v-for="asset in forSale" class="forsale">'+
            '<p>For Sale: </p>'+
            '<button v-on:click="buy(asset)">Buy</button>'+
        '</div>'+
    '</div>',
    methods: {
        buy: function (webAsset) {
            this.$emit('buy-event', webAsset);
        }
    }
});

// just display info
Vue.component('webassets-disp', {
    props: ['state'],
    template: '<div class="ui">' +
        '<h3>Web Assets Game: </h3>' +
        '<p>Money: {{ format(state.money) }}</p>'+
    '</div>',
    methods: {
        format: function(money){
           return utils.format_money(money);
        }
    }
});

// main vue
new Vue({
    el: '#app',
    data: function(){
        return {
            money: 1000,
            webAssets: []
        };
    },
    template: '<div class="wrap_main">'+
        '<webassets-disp v-bind:state="$data"></webassets-disp>'+
        '<webassets-ui-buy v-bind:state="$data" v-on:buy-event="buy" ></webassets-ui-buy>'+
    '</div>',
    methods: {
        buy: function(webAsset){
           console.log(webAsset.postCount);
        }
    }
});