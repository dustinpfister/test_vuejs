Vue.component('menu-sun', {
  props: ['currentMenu', 'sun'],
  data: function () {
    return {
    };
  },
  render: function(createElement){
      var children = [];
      var vm = this;
      if(this.$props.currentMenu === 'sun'){
          children.push(createElement('input', {
              attrs: {
                 type: 'button',
                 value: 'center'
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
        this.$emit('set-sunpos-ad', 0, 0);
    }
  }
});