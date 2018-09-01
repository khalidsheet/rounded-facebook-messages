var url = window.location.origin;

console.log(url, 'url')

window.onload = function() {
	let elem = document.querySelectorAll('._1nc7 ._5w1r');
	console.log(elem, 'm');	
	for (var i = elem.length - 1; i >= 0; i--) {
		elem[i].style.borderRaduis = "13em !important";
	}	
}



