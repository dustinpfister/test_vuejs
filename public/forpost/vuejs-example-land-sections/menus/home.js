Vue.component('menu-home', {
  props: ['currentMenu', 'sun'],
  data: function () {
    return {
    };
  },
  template: '<div v-if="currentMenu === \'home\'">'+
      '<h1>Mr Sun Land Sections: </h1>'+
      '<p>Sun Position: {{ sun.x }}, {{ sun.y }}</p>'+
      '<p>Sun Distance from center: {{ sun.dist }} </p>'+
      '<p>Sun Angle from center: {{ (sun.a / (Math.PI * 2) * 360).toFixed(2) }} (degrees). </p>'+
  '</div>'
});