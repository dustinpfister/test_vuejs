Vue.component('menu-manual', {
  //props: ['money', 'currentMenu'],
  //data: function () {
  //  return {
  //  };
  //},
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
                  click: this.click
              }
          }));
      }
      return createElement('div', children);
  },
  methods: {
    click: function(e){
        //this.$emit('delta-money', 1);
        this.$emit('state-change', 'delta-money', 1);
    }
  }
});