Vue.component('image-color-pick', {
    props: ['img'],
    render: function(createElement){
        var img = this.$props.img,
        vm = this,
        divs = [];
        if(img){
            img.palette.forEach(function(color, i){
                var x = i % 2,
                y = Math.floor(i / 2);
                var px = createElement('div', {
                    attrs: {
                        id: 'color_' + i,
                        class: 'image-color-pick-div',
                        style: vm.styleStr(img, i, x, y, color)
                    },
                    on:{
                        click: vm.colorClick
                    }
                });
                divs.push(px);
            });
        }
        return createElement('div', {
            attrs: {
                class: 'image-color-pick ui-div',
                style: 'width:' + (2 * 32) + 'px;height:' + (6 * 32) + 'px;'
            }
        }, divs);
    },
    methods: {
        styleStr: function(img, i, x, y, color){
            var str = 'left:' + ( x * 32 ) + 'px;top:'+ ( y * 32 ) +';background:' + color + ';';
            if(Number(img.colorIndex) === Number(i)){
                str += 'outline:3px solid #afafaf;z-index:1;'
            }else{
                str += 'z-index:0;'
            }
            return str;
        },
        colorClick: function(e){
            var div = e.target,
            idArr = div.id.split('_')
            this.$emit('color-click', idArr[1]);
        }
    }
});
