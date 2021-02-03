
Vue.mixin({
  methods: {
    format_money: utils.format_money
  }
});

// Create a WebAsset
Vue.component('webassets-ui-create', {
    props: ['state'],
    data: function(){
        return {
            startPosts: 20,
            wordsPerPost: 500,
            wordsPerClick: 100,
            progress: {
                words: 0,
                wordsNeeded: 0,
                per: 0
            }
        }
    },
    mounted: function(){
        this.updateProgress();
    },
    template: '<div class="ui">'+
        '<h3>Create a Website for Free: </h3>' +
    '</div>',
    methods: {
        updateProgress: function(){
            var dat = this.$data,
            progress = dat.progress;
            progress.wordsNeeded = dat.startPosts * dat.wordsPerPost;
            progress.per = progress.words / progress.wordsNeeded;
        },
        write: function (webAssetIndex) {
            var dat = this.$data,
            progress = dat.progress;
            
        }
    }
});

// Buy a WebAsset object with money
Vue.component('webassets-ui-buy', {
    props: ['state'],
    data: function(){
        return {
            forSale: [WebAsset(), WebAsset()]
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
        buy: function (webAssetIndex) {
            var money = this.$props.state.money,
            webAsset = this.$data.forSale[webAssetIndex];
            if(money >= webAsset.worth){
                this.$data.forSale.splice(webAssetIndex, 1);
                this.$emit('buy-event', webAsset);
            }
        }
    }
});

// prefrom actions with current websites
Vue.component('webassets-ui-current', {
    props: ['state'],
    template: '<div class="ui">'+
        '<h3>Current Websites: </h3>'+
        '<div v-for="asset, index in state.webAssets" class="">'+
            '<p>Site: </p>'+
            '<p>{{ format_money(asset.worth) }}</p>'+
            '<button v-on:click="sell(index)">Sell</button>'+
        '</div>'+
    '</div>',
    methods: {
        // sell a webAsset
        sell: function (index) {
            this.$emit('sell-event', index);
        }
    }
});

// just display info
Vue.component('webassets-disp', {
    props: ['state'],
    template: '<div class="ui">' +
        '<h3>Web Assets Game: </h3>' +
        '<p>Money: {{ format_money(state.money) }}</p>'+
    '</div>'
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
        '<webassets-ui-create v-bind:state="$data"></webassets-ui-create>'+
        '<webassets-ui-buy v-bind:state="$data" v-on:buy-event="buy" ></webassets-ui-buy>'+
        '<webassets-ui-current v-bind:state="$data" v-on:sell-event="sell" ></webassets-ui-current>'+
    '</div>',
    methods: {
        buy: function(webAsset){
           console.log(webAsset.postCount);
           this.$data.money -= webAsset.worth;
           this.$data.webAssets.push(webAsset);
        },
        sell: function(index){
           var webAsset = this.$data.webAssets[index];
           this.$data.money += webAsset.worth;
           this.$data.webAssets.splice(index, 1);
        }
    }
});