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
          // center button
          children.push(createElement('input', {
              attrs: {
                 type: 'button',
                 value: 'center'
              },
              on: {
                  click: this.center
              }
          }));
          children.push(createElement('input', {
              attrs: {
                 type: 'text',
                 value: vm.$props.sun.a
              },
              on: {
                  keydown: function(e){
                      console.log('key down');
                  }
              }
          }));
      }
      return createElement('div', children);
  },
  methods: {
    center: function(e){
        this.$emit('set-sunpos-ad', 0, 0);
    },
    setPos: function(a, d){
        this.$emit('set-sunpos-ad', a, d);
    }
  }
});