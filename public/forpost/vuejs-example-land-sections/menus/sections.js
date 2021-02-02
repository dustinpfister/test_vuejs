(function(){

    // ui for selecting the current section index to work on
    Vue.component('sections-ui-select', {
        props: ['sections'],
        template: '<div>'+
            '<button v-on:click="prev">prev</button> | '+
            '<button v-on:click="next">next</button>'+
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
            return {
                currentSectionIndex: 0
            }
        },
        template: '<div v-if="currentMenu === \'sections\'">'+
            '<sections-ui-select v.bind:sections="sections" v-on:step-section="step" ></sections-ui-select>'+
        '</div>',
        methods: {
            step: function(deltaIndex){
                var dat = this.$data;
                dat.currentSectionIndex += deltaIndex;
                dat.currentSectionIndex = utils.mod(dat.currentSectionIndex, this.$props.sections.length);
                console.log(dat.currentSectionIndex);
            }
        }
        
    });
}());