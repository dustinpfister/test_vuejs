Vue.component('menu-manual', {
  props: ['money', 'currentMenu'],
  data: function () {
    return {
    };
  },
  render: function(createElement){
      var children = [];
      var vm = this;
      if(this.$props.currentMenu === 'manual'){
          children.push(createElement('input', {
              attrs: {
                 type: 'button',
                 value: 'click ('+ vm.$props.money + ')'
              },
              on: {
                  click: function(e){
                      vm.$emit('delta-money', 1);
                  }
              }
          }));
      }
      return createElement('div', children);
  },
  methods: {
    click: function(e){
      //console.log(this.$data.money)
      //console.log(this.$props)
    }
  }
});