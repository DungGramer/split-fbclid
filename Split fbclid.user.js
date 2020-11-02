// ==UserScript==
// @name         Split fbclid
// @author       DungGramer
// @version      1.1
// @description  Split fbclid when open link from facebook
// @homepage     https://github.com/DungGramer/split-fbclid
// @icon         https://raw.githubusercontent.com/DungGramer/skip-fbclid/main/icon.png
// @include      /((&fbclid=\w+)|(fbclid=\w+))(-\w+|)/
// @license      CC-BY-SA-3.0; http://creativecommons.org/licenses/by-sa/3.0/
// @license      MIT
// @grant        none
// @copyright    2020, DungGramer
// ==/UserScript==

(function () {
  let newURL = window.location.href.split(/((&fbclid=\w+)|(fbclid=\w+))(-\w+|)/);
  let newHref = newURL[0].match(/\?\w+/) != null ? decodeURIComponent(newURL[0]) : newURL[0].split(/\?/)[0];
  if (newURL[newURL.length - 1].match(/-\w+/) != null) {
    window.location = decodeURIComponent(newHref);
  }
  else {
    window.location = decodeURIComponent(newHref + newURL[newURL.length - 1]);
  }
})();
