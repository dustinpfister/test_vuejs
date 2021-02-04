Vue.component('sections-ui-grid', {
    props: ['section'],
    data: function(){
        return {
           gridHeight: Math.round(this.$props.section.grid.h * 32),
           gridWidth: Math.round(this.$props.section.grid.w * 32)
        };
    },
    template: '<div class="menu_item">'+
        '<div v-bind:style="\'margin-left:auto;margin-right:auto;position:relative;'+
        'height:\'+gridHeight+\'px;width:\'+gridWidth+\'px;\'">'+
            '<div class="cell" v-for="cell in section.grid.cells" v-bind:style="setStyle(cell)" v-on:click="clickCell(cell)"></div>' +
        '</div>'+
    '</div>',
    methods: {
        // set a style for a cell
        setStyle: function(cell){
            var color = ['blue', 'red', 'yellow', 'green'];
            return 'position:absolute;'+
                'left:'+Math.floor(32 * cell.x)+'px;'+
                'top:'+Math.floor(32 * cell.y)+'px;'+
                'background:'+color[cell.itemIndex]+';'+
                'width:32px;height:32px;';
        },
        // what to do if a cell is clicked
        clickCell: function(cell){
            this.$emit('click-cell', cell)
        }
    }
});
