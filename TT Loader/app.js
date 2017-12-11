const rightDiv = document.getElementById("loading-overlay-right");
const leftDiv = document.getElementById("loading-overlay-left");
const overlay = document.getElementById("overlay");
const logo = document.getElementById("logo");
const loadingText = document.getElementById("loading-text");

function startLoadingClass(e) {
	// logo.classList.add("started");
};

function loading() {
	logo.classList.add("loading");
	loadingText.classList.add("loading");
}

function endLoadingClass(e) {
	logo.classList.remove("started");
	logo.classList.add("ended");
	loadingText.classList.remove("loading");
};

function overlayEndLoading(e){
	rightDiv.classList.add("timed-out");
	leftDiv.classList.add("timed-out");
};

setTimeout(startLoadingClass, 0);
setTimeout(loading, 1000);

document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(endLoadingClass, 4000);
		setTimeout(overlayEndLoading, 5000);
  });

	