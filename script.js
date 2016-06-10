$(document).ready(function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		console.log("This is not a mobile friendly site. Please use a computer.");
	}
});