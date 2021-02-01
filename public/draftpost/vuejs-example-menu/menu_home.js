Vue.component('menu-home', {
  props: ['money'],
  data: function () {
    return {
    };
  },
  template: '<p>This is home current number of clicks: {{ money }}</p>'
});