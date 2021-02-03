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
        '<webassets-ui-create v-bind:state="$data" v-on:create-event="create"></webassets-ui-create>'+
        '<webassets-ui-buy v-bind:state="$data" v-on:buy-event="buy" ></webassets-ui-buy>'+
        '<webassets-ui-current v-bind:state="$data" v-on:sell-event="sell" ></webassets-ui-current>'+
    '</div>',
    methods: {
        create: function(posts, words){
            console.log(posts, words);
        },
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