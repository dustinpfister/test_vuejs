

Vue.component('sections-info', {
    props: ['sections'],
    template: '<div class="menu_item">'+
        '<table>' +
           '<tr> <th>index</th> <th>distance</th> <th>per</th> <th>pos</th> <th>temp</th> </tr>'+
           '<tr v-for="sec, i in sections" >'+
              '<td>{{i}}</td>'+
              '<td>{{ sec.distance.toFixed(2) }}</td>'+
              '<td>{{ sec.per.toFixed(2) }}</td>' +
              '<td>{{ Math.round(sec.x) + \', \' + Math.round(sec.y) }}</td>' +
              '<td>{{ sec.temp.displayTemp  }} {{ sec.temp.displayUnit }} ( {{ sec.temp.kelvin.toFixed(2) }} kelvin) {{ Math.round(sec.temp.per * 100) }}%</td>' +
           '</tr>'+
        '</table>'+
    '</div>'
});

Vue.component('menu-sections-table', {
    props: ['currentMenu', 'sun', 'sections'],
    template: '<div v-if="currentMenu === \'sections-table\'">'+
        '<sections-info v-bind:sections="sections"></sections-info>'+
    '</div>'
});
