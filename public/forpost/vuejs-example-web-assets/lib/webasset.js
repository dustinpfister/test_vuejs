var WebAsset = (function(){

    var setAssetWorth = function(asset){
        asset.worth = Math.floor(asset.words * 0.0125);
        asset.moneyPerTick = 1 + Math.floor(asset.worth * 0.01);
    };

    var api = function(opt){
        opt = opt || {};
        var asset = {
            secs: 0,
            secsPerTick: 10,
            words: opt.words || 30000,
            postCount: opt.postCount || 10,
            avgWordsPerPost: 0,
            worth: 0,
            write: {
                words: 0,
                per: 0,
                target: 500
            },
            moneyPerTick:0
        };
        asset.avgWordsPerPost = asset.words / asset.postCount;
        setAssetWorth(asset);
        return asset;
    };

    // prefrom a write action for an asset
    api.write = function(asset, author, count){
        asset.write.words += author.wordsPerWrite * count;
        asset.per = asset.write.words / asset.write.target;
        if(asset.per >= 1){
           var postDelta = Math.floor(asset.write.words / asset.write.target);
           asset.postCount += postDelta;
           asset.words += asset.write.target * postDelta;
           asset.avgWordsPerPost = asset.words / asset.postCount;
           asset.write.words = utils.mod(asset.write.words, asset.write.target);
           asset.per = asset.write.words / asset.write.target;
          setAssetWorth(asset);
        }
    };

    // update a web asset by an about of time that has passed in seconds
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