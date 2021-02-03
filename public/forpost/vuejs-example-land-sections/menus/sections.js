(function(){

    // ui for selecting the current section index to work on
    Vue.component('sections-ui-select', {
        props: ['section'],
        template: '<div class="menu_item">'+
            '<h3>Select current world section</h3>'+
            '<div><p>#{{ section.i }}, distance: {{ section.distance.toFixed(2) }}</p></div>' +
            '<div><button v-on:click="prev">prev</button> | '+
            '<button v-on:click="next">next</button></div>'+
        '</div>',
        methods: {
            next: function(){
                this.$emit('step-section', 1);
            },
            prev: function(){
                this.$emit('step-section', -1);
            }
        }
    });

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
            setStyle: function(cell){
                var color = ['blue', 'red', 'yellow', 'green'];
                return 'position:absolute;'+
                'left:'+Math.floor(32 * cell.x)+'px;'+
                'top:'+Math.floor(32 * cell.y)+'px;'+
                'background:'+color[cell.itemIndex]+';'+
                'width:32px;height:32px;';
            },
            clickCell: function(cell){
                this.$emit('click-cell', cell)
            }
        }
    });

    Vue.component('menu-sections', {
        props: ['currentMenu', 'sun', 'sections'],
        data: function(){
            console.log(this.$props.sections[0]);
            return {
                currentSectionIndex: 0,
                section: this.$props.sections[0]
            }
        },
        template: '<div v-if="currentMenu === \'sections\'">'+
            '<sections-ui-select v-bind:section="section" v-on:step-section="step" ></sections-ui-select>'+
            '<sections-ui-grid v-bind:section="section" v-on:click-cell="clickCell" ></sections-ui-grid>'+
        '</div>',
        methods: {
            step: function(deltaIndex){
                var dat = this.$data;
                dat.currentSectionIndex += deltaIndex;
                dat.currentSectionIndex = utils.mod(dat.currentSectionIndex, this.$props.sections.length);
                console.log(dat.currentSectionIndex);
                dat.section = this.$props.sections[dat.currentSectionIndex];
            },
            clickCell: function(cell){
                console.log(cell.x, cell.y);
                cell.itemIndex += 1;
                cell.itemIndex = utils.mod(cell.itemIndex, 4);
            }
        }
        
    });
}());