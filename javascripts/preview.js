// Inject ad in format-container
let urlParams = new URLSearchParams(window.location.search);
let url = urlParams.get('previewLink');
if(url.endsWith('.mp4')){
    // Inject video if mp4
    document.getElementById('format-container').innerHTML = '<video id="advert" height="100%" width="100%" controls autoplay muted loop>';
} else {
    // Inject iframe if else
    if (url.indexOf('inter') > 0) {
        // Add close button
    	document.getElementById('format-container').innerHTML = '<a onclick="javascript:closeFrame();" style="cursor: pointer; position: absolute; top: 10px; right: 10px; z-index: 1;"><img src="images/icons/icon-close.png" style="width="20px"; height="20px";"></a><iframe allow="geolocation" id="advert" height="100%" width="100%" frameborder="0"></iframe>';
    } else if (url.indexOf('mpu') > 0) {
    	document.getElementById('format-container').innerHTML = '<iframe allow="geolocation" id="advert" style="position: absolute; top: 170px; left: 50%; transform: translateX(-50%);" height="250px" width="300px" frameborder="0"></iframe>';
    } else if (url.indexOf('banner') > 0) {
    	document.getElementById('format-container').innerHTML = '<iframe allow="geolocation" id="advert" style="position: absolute; top: 100%; left: 50%; transform: translate(-50%, -100%);" height="50px" width="320px" frameborder="0"></iframe>';
    }
}
// Set video/iframe target
document.getElementById('advert').src = url;

// Hide interstitial when close button clicked
function closeFrame() {
    document.getElementById("format-container").style.display="none";
}