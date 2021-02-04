Vue.component('sections-ui-cellaction', {
    template: '<div class="menu_item">'+
        '<p>Cell Action Select</p>' +
    '</div>'
});

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
        '<sections-ui-cellaction></sections-ui-cellaction>' +
        '<sections-ui-grid v-bind:section="section" v-on:click-cell="clickCell" ></sections-ui-grid>' +
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
            var dat = this.$data;
            if(dat.cellAction >= 0){
                cell.itemIndex = dat.cellAction;
            }
        }
    }
});
