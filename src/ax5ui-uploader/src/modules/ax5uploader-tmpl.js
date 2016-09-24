/*
 * Copyright (c) 2016. tom@axisj.com
 * - github.com/thomasjang
 * - www.axisj.com
 */

// ax5.ui.uloader.tmpl
(function () {

    var UPLOADER = ax5.ui.uploader;
    var layout =
`<div data-ax5uploader="{{instanceId}}">
    <div data-ax5uploader-preview=""></div>
    <div data-ax5uploader-progress=""></div>
    <input data-ax5uploader-input="" type="file" ' + inputFileMultiple + ' accept="' + inputFileAccept + '" capture="camera" />
</div>`;

    UPLOADER.tmpl = {
        "layout": layout,

        get: function (tmplName, data) {
            return ax5.mustache.render(UPLOADER.tmpl[tmplName], data);
        }
    };

})();