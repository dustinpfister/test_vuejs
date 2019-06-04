var vmError = new Vue({
        el: '#demo-error',
        template: '<div>' +
        '<span>Error: {{ error.mess }}</span></br>' +
        '<span>Source: {{ error.source }}</span></br>' +
        '<span>line,col: {{ error.line }} , {{ error.col }}</span></br>' +
        '</div>',
        data: {
            error: {
                mess: '',
                source: '',
                line: '',
                col: ''
            }
        }
    });

window.onerror = function (mess, source, line, col) {
    vmError.error.mess = mess;
    vmError.error.source = source;
    vmError.error.line = line;
    vmError.error.col = col;

};

// trowning an error
throw new Error('My error');
