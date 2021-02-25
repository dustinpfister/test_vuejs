Vue.component('menu-manual', {
  props: ['state', 'currentMenu'],
  render: function(createElement){
      var children = [];
      var vm = this;
      if(this.$props.currentMenu === 'manual'){
          children.push(createElement('input', {
              attrs: {
                 type: 'button',
                 value: 'click ('+ vm.$props.state.money + ')'
              },
              on: {
                  click: function(e){
                      vm.$emit('state-change', 'delta-money', 1);
                  }
              }
          }));
      }
      return createElement('div', children);
  }
});