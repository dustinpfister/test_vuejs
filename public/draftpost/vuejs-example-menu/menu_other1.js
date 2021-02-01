Vue.component('menu-other1', {
  props: ['money'],
  data: function () {
    return {
    };
  },
  template: '<p><input type="button" v-on:click="$emit(\'delta-money\', 1)" value="click"> {{ money }}</p>',
  methods: {
    click: function(e){
      //console.log(this.$data.money)
      //console.log(this.$props)
    }
  }
});