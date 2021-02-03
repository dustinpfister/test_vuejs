// global method(s)
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
            startPosts: 10,
            wordsPerPost: 100,
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
        '<div>Progress: {{ progress.words }} / {{ progress.wordsNeeded }} {{ progress.per }}</div>'+
        '<button v-on:click="write()">Write</button>'+
    '</div>',
    methods: {
        updateProgress: function(){
            var dat = this.$data,
            progress = dat.progress;
            progress.wordsNeeded = dat.startPosts * dat.wordsPerPost;
            progress.words = progress.words > progress.wordsNeeded ? progress.wordsNeeded: progress.words;
            progress.per = progress.words / progress.wordsNeeded;
        },
        write: function (webAssetIndex) {
            var dat = this.$data,
            progress = dat.progress;
            progress.words += dat.wordsPerClick;
            this.updateProgress();
            if(progress.per === 1){
                this.$emit('create-event', dat.startPosts, progress.wordsNeeded);
                progress.words = 0;
                this.updateProgress();
            }
        }
    }
});

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

// prefrom actions with current websites
Vue.component('webassets-ui-current', {
    props: ['state'],
    template: '<div class="ui">'+
        '<h3>Current Websites: </h3>'+
        '<div v-for="asset, index in state.webAssets" class="currentsite">'+
            '<p>Site: </p>'+
            '<p>{{ format_money(asset.worth) }}</p>'+
            '<p>Money Per Tick: {{ format_money(asset.moneyPerTick) }}</p>'+
            '<p><button v-on:click="sell(index)">Sell</button></p>'+
            '<div v-bind:style="\'width:\'+Math.round(asset.secs / asset.secsPerTick * 100)+\'%;height:10px;background:lime;\'"></div>'+
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
var main = new Vue({
    el: '#app',
    data: function(){
        return {
            money: 0,
            lastUpdate: new Date(),
            webAssets: [WebAsset({words: 10000})]
        };
    },
    template: '<div class="wrap_main">'+
        '<webassets-disp v-bind:state="$data"></webassets-disp>'+
        '<webassets-ui-create v-bind:state="$data" v-on:create-event="create"></webassets-ui-create>'+
        '<webassets-ui-buy v-bind:state="$data" v-on:buy-event="buy" ></webassets-ui-buy>'+
        '<webassets-ui-current v-bind:state="$data" v-on:sell-event="sell" ></webassets-ui-current>'+
    '</div>',
    mounted: function(){
        var dat = this.$data;
        var loop = function(){
            var now = new Date(),
            secs = (now - dat.lastUpdate) / 1000;
            setTimeout(loop, 100);
            dat.webAssets.forEach(function(asset){
                 var deltaMoney = WebAsset.update(asset, secs);
                 dat.money += deltaMoney;
            });
            dat.lastUpdate = now;
        };
        loop();
    },
    methods: {
        create: function(posts, words){
            console.log(posts, words);
            this.$data.webAssets.push(WebAsset({
                posts: posts,
                words: words
            }));
        },
        buy: function(asset){
           this.$data.money -= asset.worth;
           this.$data.webAssets.push(asset);
        },
        sell: function(index){
           var asset = this.$data.webAssets[index];
           this.$data.money += asset.worth;
           this.$data.webAssets.splice(index, 1);
        }
    }
});