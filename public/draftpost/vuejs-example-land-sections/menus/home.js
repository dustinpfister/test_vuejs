Vue.component('menu-home', {
  props: ['currentMenu'],
  data: function () {
    return {
    };
  },
  template: '<div v-if="currentMenu === \'home\'"><p>This is the home menu</p></div>'
});