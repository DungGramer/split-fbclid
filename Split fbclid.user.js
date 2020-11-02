// ==UserScript==
// @name         Split fbclid
// @author       DungGramer
// @version      1.0
// @description  Split fbclid when open link from facebook
// @homepage     https://greasyfork.org/en/scripts/415274-split-fbclid
// @namespace    https://github.com/DungGramer/skip-fbclid/
// @icon         https://raw.githubusercontent.com/DungGramer/skip-fbclid/main/icon.png
// @include      /((&fbclid=\w+)|(fbclid=\w+))(-\w+|)/
// @license		 MIT
// @grant        none
// ==/UserScript==

(function() {
    let newURL = window.location.href.split(/((&fbclid=\w+)|(fbclid=\w+))(-\w+|)/);
    let newHref = newURL[0].match(/\?\w+/) != null ? decodeURIComponent(newURL[0]) : newURL[0].split(/\?/)[0];
    if(newURL[newURL.length - 1].match(/-\w+/) != null) {
      window.location = decodeURIComponent(newHref);
    } else {
        window.location = decodeURIComponent(newHref + newURL[newURL.length - 1]);
    }
})();