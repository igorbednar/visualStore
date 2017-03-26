//Visual store api, depends on open layers
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['ol'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('ol'));
    } else {
        // Browser globals (root is window)
        root.vs = factory(root.ol);
    }
}(this, function (ol) {
    var vs = {};

    vs.setBackground = function(url){

    }
    return vs;
}));