// prefrom actions with current websites
Vue.component('webassets-ui-current', {
    props: ['state'],
    template: '<div class="ui">'+
        '<h3>Current Websites: </h3>'+
        '<div v-for="asset, index in state.webAssets" class="currentsite">'+
            '<p>Site: </p>'+
            '<p>Worth: {{ format_money(asset.worth) }}, Money Per Tick: {{ format_money(asset.moneyPerTick) }}</p>'+
            '<p>{{ asset.write.words }}</p>'+
            '<p><button v-on:click="write(index)">Write</button> | <button v-on:click="sell(index)">Sell</button></p>'+
            '<div v-bind:style="\'width:\'+Math.round(asset.secs / asset.secsPerTick * 100)+\'%;height:10px;background:lime;\'"></div>'+
        '</div>'+
    '</div>',
    methods: {
        // sell a webAsset
        sell: function (index) {
            this.$emit('sell-event', index);
        },
        write: function (index) {
            this.$emit('write-event', index);
        }
    }
});
