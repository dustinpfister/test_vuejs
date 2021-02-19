var app = new Vue({
        el: '#demo',
        template: '<div>' +
            '<button v-on:click="startAWork">Start a Work</button>' +
            '<h3> works:</h3>' +
            '<div style="background:gray;padding:10px;">' +
                '<div v-for="w in works" >id: {{w.id}}, worth: {{ w.worth }}</div>' +
            '</div>' +
        '</div>',
        data: {
            count: 0,
            maxWorks: 10,
            works: []   // a log of work objects
        },
        updated: function () {
            var data = this.$data;
        },
        methods: {
            startAWork: function () {
                var dat = this.$data;
                var obj = {
                    id: dat.count,
                    worth: 1
                };
                dat.count += 1;
                dat.works.push(obj);
            }
        }
    });
