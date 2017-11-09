var body = document.getElementsByTagName("body")[0];
function move() {
	var box = document.getElementById("ticketbox");
	if (window.innerWidth >= 768) {
		var grey = document.getElementsByClassName("grey")[0].getBoundingClientRect();
		if (body.scrollTop > 729 && grey.bottom > 345) {
			box.style.opacity = "1";
			box.style.position = "fixed";
			box.style.top = "60px";
			box.style.left = "90px";
			box.style.margin = "0";
		} else if (grey.bottom <= 345 && grey.bottom >= 285) {
			var opacity = ((grey.bottom - 285)/6)/10;
			var top = (60-(345 - grey.bottom))+"px";
			box.style.position = "fixed";
			box.style.top = top;
			box.style.left = "90px";
			box.style.margin = "0";
			box.style.opacity = opacity
		} else {
			box.style.position = "static";
			box.style.top = "0";
			box.style.left = "0";
			box.style.margin = "80px 0 0 90px";
		}
	}
}
function test() {
	console.log(body.scrollTop);
	console.log(document.getElementsByClassName("grey")[0].getBoundingClientRect());
}
setInterval (move, 1);