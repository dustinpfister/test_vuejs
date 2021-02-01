Vue.component('menu-other1', {
  props: ['money', 'currentMenu'],
  data: function () {
    return {
    };
  },
  template: '<div v-if="currentMenu === \'other1\'"><input type="button" v-on:click="$emit(\'delta-money\', 1)" value="click"> {{ money }}</div>',
  methods: {
    click: function(e){
      //console.log(this.$data.money)
      //console.log(this.$props)
    }
  }
});