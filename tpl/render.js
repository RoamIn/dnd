const jade = require('jade');

module.exports = {
    compile(str, options = {}) {
        return jade.compile(str, options);
    },
    compileFile(path, options = { name: 'indexbd' }) {
        return jade.compileFile(path, options);
    },
    render(str, options = {}) {
        return jade.render(str, options);
    },
    renderFile(path, options = {}) {
        options = Object.assign(options, {
            filename: 'indexbd', pretty: '\t'
        });

        return jade.renderFile(path, options);
    }
};
