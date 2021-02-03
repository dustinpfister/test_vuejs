var WebAsset = (function(){

    var api = function(opt){
        opt = opt || {};
        var asset = {
            secs: 0,
            secsPerTick: 3,
            words: opt.words || 30000,
            postCount: opt.postCount || 10,
            avgWordsPerPost: 0,
            worth: 0,
            moneyPerTick:0
        };
        asset.avgWordsPerPost = asset.words / asset.postCount;
        asset.worth = Math.floor(asset.words * 0.0125);
        asset.moneyPerTick = 1 + Math.floor(asset.worth * 0.01);
        return asset;
    };

    api.update = function(asset, secs){
        asset.secs += secs;
        var ticks = Math.floor(asset.secs / asset.secsPerTick),
        money = 0;
        if(ticks > 0){
            money = asset.moneyPerTick * ticks;
            asset.secs = utils.mod(asset.secs , asset.secsPerTick);
        }
        return money;
    };

    return api;

}());