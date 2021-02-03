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
