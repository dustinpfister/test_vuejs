Vue.component('menu-home', {
  props: ['currentMenu', 'sun'],
  data: function () {
    return {
    };
  },
  template: '<div v-if="currentMenu === \'home\'">'+
      '<h1>Mr Sun Land Sections: </h1>'+
      '<p>Sun Position: {{ sun.x }}, {{ sun.y }}</p>'+
  '</div>'
});