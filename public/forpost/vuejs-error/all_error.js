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
        },
        methods: {
            onError: function (mess, source, line, col) {
                var err = this.error;
                err.mess = mess;
                err.source = source;
                err.line = line;
                err.col = col;
            }
        }
    });
window.onerror = vmError.onError;

// trowning an error
throw new Error('My error');
