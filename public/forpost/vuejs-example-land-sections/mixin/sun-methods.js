Vue.mixin({methods : {
    setA: function(e){
         this.setPos(Math.PI / 180 * e.target.value, this.$props.sun.dist);
    },
    setD: function(e){
         this.setPos(this.$props.sun.a, e.target.value);
    },
    center: function(e){
        this.$emit('set-sunpos-ad', 0, 0);
    },
    setPos: function(a, d){
        this.$emit('set-sunpos-ad', Number(a), Number(d));
    }
}});
