Vue.component('image-div-grid', {
    props: ['img'],
    render: function(createElement){
        var img = this.$props.img,
        vm = this,
        divs = [];
        console.log('render');
        img.data.forEach(function(px, i){
            var x = i % img.width,
            y = Math.floor(i / img.width),
            color = img.palette[px];
            var px = createElement('div', {
                attrs: {
                    id: 'px_' + x + '_' + y,
                    class: 'image-div-grid-px',
                    style: 'left:' + ( x * img.pxSize ) + 'px;top:'+ ( y * img.pxSize ) +';background:' + color + ';'
                },
                on:{
                    click: vm.pxClick
                }
            });
            divs.push(px);
        });
        return createElement('div', {
            attrs: {
                class: 'image-div-grid',
                style: 'width:' + (img.width * img.pxSize) + 'px;height:' + (img.height * img.pxSize) + 'px;'
            }
        }, divs);
    },
    methods: {
        pxClick: function(e){
            var div = e.target,
            idArr = div.id.split('_')
            console.log(idArr);
            this.$emit('px-click', idArr[1], idArr[2]);
            this.$forceUpdate();
        }
    }
});
