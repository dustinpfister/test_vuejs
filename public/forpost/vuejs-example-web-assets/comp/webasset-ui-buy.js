// Buy a WebAsset object with money
Vue.component('webassets-ui-buy', {
    props: ['state'],
    data: function(){
        return {
            forSale: [WebAsset({words: 10000}), WebAsset({words: 30000})]
        }
    },
    template: '<div class="ui">'+
        '<h3>Buy Website: </h3>'+
        '<div v-for="asset, index in forSale" class="forsale">'+
            '<p>For Sale: </p>'+
            '<p>{{ format_money(asset.worth) }}</p>'+
            '<button v-on:click="buy(index)">Buy</button>'+
        '</div>'+
    '</div>',
    methods: {
        buy: function (assetIndex) {
            var money = this.$props.state.money,
            asset = this.$data.forSale[assetIndex];
            if(money >= asset.worth){
                this.$data.forSale.splice(assetIndex, 1);
                this.$emit('buy-event', asset);
            }
        }
    }
});
