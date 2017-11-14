function index() {
	if (window.innerWidth >= 768) {
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
}
function about() {
	if (window.innerWidth >= 768) {
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
}
function speakers() {
	if (window.innerWidth >= 768) {
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
function sponsers() {
	if (window.innerWidth >= 768) {
		var tops = document.getElementsByTagName("header")[0].getBoundingClientRect();
		var box = document.getElementsByClassName("tickets")[0];
		var bottom = document.getElementsByClassName("table")[0].getBoundingClientRect();
		var bottom2 = document.getElementsByClassName("sponsorship-details")[0].getBoundingClientRect();
		if ((tops.bottom < (-544) && bottom.bottom > 780) || (bottom.bottom < -100 && bottom2.bottom > 300)) {
			box.classList.add("tickets-fixed");
			box.style.top = "60px";
			box.style.opacity = "1";
		} else if (bottom.bottom <= 780 && bottom.bottom >= 720) {
			box.classList.add("tickets-fixed");
			var opacity = ((bottom.bottom - 720)/6)/10;
			var top = (60-(780 - bottom.bottom))+"px";
			box.style.top = top;
			box.style.opacity = opacity;
		} else if (bottom.bottom > -100 && bottom.bottom < -40) {
			box.classList.add("tickets-fixed");
			var opacity = ((bottom.bottom + 100)/6)/10;
			var top = (60+(100 + bottom.bottom))+"px";
			box.style.top = top;
			box.style.opacity = 1-opacity;
		} else if (bottom2.bottom < 300 && bottom2.bottom > 240) {
			box.classList.add("tickets-fixed");
			var opacity = ((bottom2.bottom - 240)/6)/10;
			var top = (60-(300 - bottom2.bottom))+"px";
			box.style.top = top;
			box.style.opacity = opacity;
		} else {
			box.classList.remove("tickets-fixed");
			box.style.top = "0";
			box.style.opacity = "1";
		}
	}
}
function calculate() {
		var form1 = document.getElementsByClassName("atet")[0].elements.namedItem("atet");
		var form2 = document.getElementsByClassName("donate")[0].elements.namedItem("donate");
		var form3 = document.getElementsByClassName("cs")[0].elements.namedItem("cs");
		var value = ((form1.value * 42) + parseInt(form2.value) + (form3.value * 10));
		var out = document.getElementsByClassName("output")[0];
		out.innerHTML = ("$ "+value);
}
function runConstant() {
	if (document.getElementById('index')) {
		index();
	} else if (document.getElementById('about')) {
		about();
	} else if (document.getElementById('speakers')) {
		speakers();
	} else if (document.getElementById('sponsers')) {
		sponsers();
	} else {
		//calculate();
	}
}
function test() {
	console.log(window.location.pathname);
	console.log(document.getElementsByTagName("header")[0].getBoundingClientRect());
	console.log(document.getElementsByClassName("sponsorship-details")[0].getBoundingClientRect());
}
setInterval (runConstant, 1);