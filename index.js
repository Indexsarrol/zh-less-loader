const less = require('less');
module.exports = function(source) {
    const callback = this.async();
    less.render(source, function(err, data) {
        console.log('_css:', data.css);
        callback(err, data.css)
    })
}