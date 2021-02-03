var WebAsset = (function(){

    var api = function(opt){
        opt = opt || {};
        var asset = {
            secs: 0,
            secsPerTick: 10,
            words: opt.words || 30000,
            postCount: opt.postCount || 10,
            avgWordsPerPost: 0,
            worth: 0
        };
        asset.avgWordsPerPost = asset.words / asset.postCount;
        asset.worth = Math.floor(asset.words * 0.0125);
        return asset;
    };

    return api;

}());