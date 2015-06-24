(function() {
var AUTHORIZED_DOMAINS= {
"www.porn01.com": false,
"porn01.com": false
};
function extract_domain(url)    {
    var matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    return matches[1];
}
 
chrome.webRequest.onBeforeRequest.addListener(function(details) { 
var domain = extract_domain(details.url);
return { cancel: AUTHORIZED_DOMAINS[domain ]===false }; 
}, {urls: ["<all_urls>"]},["blocking"]);})();
