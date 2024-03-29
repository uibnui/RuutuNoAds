// ==UserScript==
// @name         RuutuNoAds
// @namespace    https://github.com/uibnui/RuutuNoAds
// @version      1
// @description  Ruutu with no ads
// @author       uibnui
// @match        https://www.ruutu.fi/video/*
// @grant        GM_openInTab
// ==/UserScript==
function videoID(url)
{
    console.log(url);
    var pos = url.search("/video/");
    console.log(pos);
    return url.slice((pos+7));
}
var id = videoID(window.location.href);
var xml = "https://gatling.nelonenmedia.fi/media-xml-cache?id=" + id;
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", xml, false ); // false for synchronous request
xmlHttp.send( null );
var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlHttp.response,"text/xml");
var node = xmlDoc.getElementsByTagName('CastMediaFile')[0].childNodes[0].nodeValue;
console.log(node);
//Change comment to window.location if you want video to open in new tab
//GM_openInTab(node, false, true, false);
window.location.href = node;
