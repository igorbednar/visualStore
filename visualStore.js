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
        root.visualStore = factory(root.ol);
    }
}(this, function (ol) {
    var visualStore = {};

    visualStore.initMap = function (trg, url) {

        var extent = [0, 0, 1024, 968];
        var projection = new ol.proj.Projection({
            code: 'xkcd-image',
            units: 'pixels',
            extent: extent
        });

        var map = new ol.Map({
            layers: [
                new ol.layer.Image({
                    source: new ol.source.ImageStatic({
                        attributions: '© <a href="http://xkcd.com/license.html">xkcd</a>',
                        url: url,
                        projection: projection,
                        imageExtent: extent
                    })
                })
            ],
            target: trg,
            view: new ol.View({
                projection: projection,
                center: ol.extent.getCenter(extent),
                zoom: 2,
                maxZoom: 8
            })
        });

    }
    return visualStore;
}));