// global method(s)
Vue.mixin({
  methods: {
    format_money: utils.format_money
  }
});

// main vue
var main = new Vue({
    el: '#app',
    data: function(){
        return {
            money: 0,
            lastUpdate: new Date(),
            webAssets: [WebAsset({words: 10000, target: 1800})]
        };
    },
    template: '<div class="wrap_main">'+
        '<disp v-bind:state="$data"></disp>'+
        '<webassets-ui-create v-bind:state="$data" v-on:create-event="create"></webassets-ui-create>'+
        '<webassets-ui-buy v-bind:state="$data" v-on:buy-event="buy" ></webassets-ui-buy>'+
        '<webassets-ui-current v-bind:state="$data" v-on:sell-event="sell" v-on:write-event="write"></webassets-ui-current>'+
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
        },
        write: function(index){
            var asset = this.$data.webAssets[index];
            console.log(asset);
            WebAsset.write(asset, {wordsPerWrite: 100}, 1);
        }
    }
});