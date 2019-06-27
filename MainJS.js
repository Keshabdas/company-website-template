// Script for navbar change on scroll
	window.onscroll = function(){
		if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
			document.getElementById('navbar').style.background = "teal";
			document.getElementById('navbar').style.borderBottom = "2px solid white";

		} else {
			document.getElementById('navbar').style.background = "transparent";
			document.getElementById('navbar').style.borderBottom = "none";
		}
	}; 

	// Media query with Javascript 
	function myMediaQuery(x){
		if(x.matches){ // if media query matches
			document.getElementById('collapsibleNavbar').classList.add("Navbar");
		} else {
			document.getElementById('collapsibleNavbar').classList.remove("Navbar");
		}
	}

	var x = window.matchMedia("(max-width: 480px)");
	myMediaQuery(x)
	x.addListener(myMediaQuery)