new Vue(
    {
        el: '#bar',
        render: function (createElement){
            var i = 0,
            len = 10,
            children = [];
            // some javaScript
            figForI = function (i){
                return (i - len / 2) / len * Math.pow(2, i);
            };
            // create vNodes
            while (i < len){
                children.push(createElement('li', i + ') : ' + figForI(i)));
                i += 1;
            }
            // return ui with vNodes
            return createElement('ul', children);
        }
    }
);

