Vue.component('sections-ui-cellaction', {
    props: ['cellAction'],
    template: '<div class="menu_item">'+
        '<h3>Cell Action Select</h3>' +
        '<p> Current Index: {{ cellAction }} </p>' +
        '<p>' + 
            '<button v-on:click="$emit(\'set-cellaction\',0)" >Water</button>' +
            '<button v-on:click="$emit(\'set-cellaction\',2)" >Sand</button>' +
            '<button v-on:click="$emit(\'set-cellaction\',3)" >Grass</button>' +
        '</p>' +
    '</div>'
});
