var vmError = new Vue({
        el: '#demo-error',
        template: '<div>' +
        '<span>Error: {{ error.mess }}</span></br>' +
        '<span>line,col: {{ error.line }} , {{ error.col }}</span></br>' +
        '</div>',
        data: {
            error: {
                mess: ''
            }
        }
    });

window.onerror = function (message, source, line, col, error) {
    //console.log('Exception: ', error)
    vmError.error.mess = message;
    vmError.error.line = line;
    vmError.error.col = col;

};

throw new Error('My error');
