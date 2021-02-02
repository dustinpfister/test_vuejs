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
        '</div>',
        methods: {
            step: function(deltaIndex){
                var dat = this.$data;
                dat.currentSectionIndex += deltaIndex;
                dat.currentSectionIndex = utils.mod(dat.currentSectionIndex, this.$props.sections.length);
                console.log(dat.currentSectionIndex);
                dat.section = this.$props.sections[dat.currentSectionIndex];
            }
        }
        
    });
}());