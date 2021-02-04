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
