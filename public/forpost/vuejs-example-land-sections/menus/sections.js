Vue.component('menu-sections', {
    props: ['currentMenu', 'sun', 'sections'],
    data: function(){
        return {
            currentSectionIndex: 0,
            section: this.$props.sections[0],
            cellAction: 0
        }
    },
    template: '<div v-if="currentMenu === \'sections\'">' +
        '<sections-ui-select v-bind:section="section" v-on:step-section="step" ></sections-ui-select>' +
        '<sections-ui-cellaction v-bind:cellAction="cellAction" v-on:set-cellaction="setCellAction" ></sections-ui-cellaction>' +
        '<sections-ui-grid v-bind:section="section" v-on:click-cell="clickCell" ></sections-ui-grid>' +
    '</div>',
    methods: {
        step: function(deltaIndex){
            var dat = this.$data;
            dat.currentSectionIndex += deltaIndex;
            dat.currentSectionIndex = utils.mod(dat.currentSectionIndex, this.$props.sections.length);
            dat.section = this.$props.sections[dat.currentSectionIndex];
        },
        clickCell: function(cell){
            var dat = this.$data;
            if(dat.cellAction >= 0){
                cell.tileIndex = dat.cellAction;
            }
        },
        setCellAction: function(actionIndex){
            console.log(actionIndex);
            this.$data.cellAction = actionIndex;
        }
    }
});
