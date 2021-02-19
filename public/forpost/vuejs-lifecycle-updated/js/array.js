new Vue({
    el: '#demo',
    template: '<div style="background:gray;padding:10px;">' +
        '<h3>Money: {{ money }}</h3>'+
        '<h3> works:</h3>' +
        '<button v-on:click="startAWork">Start a Work</button> ' +
        '<button v-on:click="processWorks">Process Works</button>' +
        '<div style="background:#afafaf;padding:10px;margin:10px;">' +
            '<div v-for="w in works" >id: {{w.id}}, worth: {{ w.worth }}</div>' +
        '</div>' +
    '</div>',
    data: {
        money: 0,
        count: 0,
        maxWorks: 10,
        works: []   // a log of work objects
    },
    // THE UPDATED HOOK
    updated: function () {
        var dat = this.$data;
        // process the works if we hit the max
        if(dat.works.length == dat.maxWorks){
            this.processWorks();
        }
    },
    methods: {
        // process the array of work objects
        processWorks: function(){
            var dat = this.$data;
            dat.works.forEach(function(w){
                dat.money += w.worth;
            });
            dat.works = [];
        },
        // start a work object
        startAWork: function () {
            var dat = this.$data;
            if(dat.works.length < dat.maxWorks){
                var w = {
                    id: dat.count,
                    worth: 1
                };
                dat.count += 1;
                dat.works.push(w);
            }
        }
    }
});
