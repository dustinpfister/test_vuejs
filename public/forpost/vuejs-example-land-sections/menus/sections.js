(function(){

    Vue.component('sections-info', {
        props: ['sections'],
        template: '<div>'+
            '<table>' +
               '<tr> <th>index</th> <th>distance</th> <th>per</th> <th>pos</th> </tr>'+
               '<tr v-for="sec, i in sections" >'+
                  '<td>{{i}}</td>'+
                  '<td>{{ sec.distance.toFixed(2) }}</td>'+
                  '<td>{{ sec.per.toFixed(2) }}</td>' +
                  '<td>{{ Math.round(sec.x) + \', \' + Math.round(sec.y) }}</td>' +
               '</tr>'+
            '</table>'+
        '</div>'
    });

    Vue.component('menu-sections', {
        props: ['currentMenu', 'sun', 'sections'],
        template: '<div v-if="currentMenu === \'sections\'">'+
            '<sections-info v-bind:sections="sections"></sections-info>'+
        '</div>'
    });
}());