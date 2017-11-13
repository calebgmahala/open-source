function move() {
	if (window.innerWidth >= 768) {
		if (window.location.href=="file:///Users/cgmahala171/Documents/assignments_cset/open-source/index.html") {
			var tops = document.getElementsByTagName("header")[0].getBoundingClientRect();
			var box = document.getElementsByClassName("tickets")[0];
			var bottom = document.getElementsByClassName("grey")[0].getBoundingClientRect();
			if (tops.bottom < (-544) && bottom.bottom > 345) {
				box.classList.add("tickets-fixed");
				box.style.top = "60px";
				box.style.opacity = "1";
			} else if (bottom.bottom <= 345 && bottom.bottom >= 285) {
				box.classList.add("tickets-fixed");
				var opacity = ((bottom.bottom - 285)/6)/10;
				var top = (60-(345 - bottom.bottom))+"px";
				box.style.top = top;
				box.style.opacity = opacity;
			} else {
				box.classList.remove("tickets-fixed");
				box.style.top = "0";
				box.style.opacity = "1";
			}
		}

		//-----------------------------------------

		if (window.location.href=="file:///Users/cgmahala171/Documents/assignments_cset/open-source/about.html") {
			var tops = document.getElementsByTagName("header")[0].getBoundingClientRect();
			var box = document.getElementsByClassName("tickets")[0];
			var bottom = document.getElementsByClassName("contact")[0].getBoundingClientRect();
			if (tops.bottom < (-544) && bottom.bottom > 350) {
				box.classList.add("tickets-fixed");
				box.style.top = "60px";
				box.style.opacity = "1";
			} else if (bottom.bottom <= 350 && bottom.bottom >= 290) {
				box.classList.add("tickets-fixed");
				var opacity = ((bottom.bottom - 290)/6)/10;
				var top = (60-(350 - bottom.bottom))+"px";
				box.style.top = top;
				box.style.opacity = opacity
			} else {
				box.classList.remove("tickets-fixed");
				box.style.top = "0";
				box.style.opacity = "1";
			}
		}

		//-----------------------------------------

		if (window.location.href=="file:///Users/cgmahala171/Documents/assignments_cset/open-source/speakers.html") {
			var tops = document.getElementsByTagName("header")[0].getBoundingClientRect();
			var box = document.getElementsByClassName("tickets")[0];
			var bottom = document.getElementsByClassName("afterparty")[0].getBoundingClientRect();
			if (tops.bottom < (-544) && bottom.bottom > 300) {
				box.classList.add("tickets-fixed");
				box.style.top = "60px";
				box.style.opacity = "1";
			} else if (bottom.bottom <= 300 && bottom.bottom >= 240) {
				box.classList.add("tickets-fixed");
				var opacity = ((bottom.bottom - 240)/6)/10;
				var top = (60-(300 - bottom.bottom))+"px";
				box.style.top = top;
				box.style.opacity = opacity
			} else {
				box.classList.remove("tickets-fixed");
				box.style.top = "0";
				box.style.opacity = "1";
			}
		}
	}
}
function test() {
	console.log(window.location);
	console.log(document.getElementsByTagName("header")[0].getBoundingClientRect());
	console.log(document.getElementsByClassName("afterparty")[0].getBoundingClientRect());
}
setInterval (move, 1);
