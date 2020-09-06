// ==UserScript==
// @name         Bilibili 爷青回
// @name:en      Bilibili Legacy Player Loading Screen
// @namespace    https://github.com/zhouhaoyu/snippets
// @version      0.2.3
// @description:en Remove new slogan of Bilibili video player, and restore the good old shaking TV
// @description  对Bilibili视频播放器的加载界面，去除“你感兴趣的视频都在B站”的标语，并恢复旧的抖动小电视
// @author       zhouhaoyu
// @supportURL   https://github.com/zhouhaoyu/snippets/issues
// @include      /^https:\/\/www\.bilibili\.com\/video\/[BbAa][Vv]/
// @include      /^https:\/\/www\.bilibili\.com\/bangumi\/play/
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    (document.head || document.documentElement).insertAdjacentHTML(
        'beforeend',
`<style>
.bilibili-player .bilibili-player-area .bilibili-player-video-panel-blur {
    background-color: white !important;
}
.bilibili-player .bilibili-player-area .bilibili-player-video-panel-blur-image-detail {
    background: url(data:image/gif;base64,R0lGODlhxACcAJEDALq6un9/fwcHB////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc3M0IzRkE5RDk3NzExRUE4REMwRDQ0RjQxMTA2OTA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc3M0IzRkFBRDk3NzExRUE4REMwRDQ0RjQxMTA2OTA3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzczQjNGQTdEOTc3MTFFQThEQzBENDRGNDExMDY5MDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzczQjNGQThEOTc3MTFFQThEQzBENDRGNDExMDY5MDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjH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) !important;
    background-size: contain !important;
    background-position: center !important;
    transform: scale(0.75) !important;
    animation: inherit !important;
}
.bilibili-player .bilibili-player-area .bilibili-player-video-panel-blur:before {
    background-color: rgba(255,255,255,.6) !important;
}
</style>`
    );
})();
