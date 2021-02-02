(function(){
    Vue.component('menu-sections', {
        props: ['currentMenu', 'sun'],
        template: '<div v-if="currentMenu === \'sections\'">'+
        '</div>'
    });
}());