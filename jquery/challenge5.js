var imgs = $(".preview"); 
var msg = "Hover over an image below.";
$(document).ready(function(){
	for (let i = 0; i < imgs.length;i++){
		$(imgs[i]).mouseover(function() {
			console.log("imgs")
			console.log("mouseover")
			$("#image").css("backgroundImage","url('"+imgs[i].src+"')");
			$("#image").text(imgs[i].alt);
		});

		$(imgs[i]).focus(function() {
			$("#image").css("backgroundImage","url('"+imgs[i].src+"')");
			$("#image").text(imgs[i].alt);
		 });
	
		$(imgs[i]).mouseout(function() {
			console.log("msg")
			$("#image").css("backgroundImage","url('')");
			$("#image").text(msg);
		 });
	
		 $(imgs[i]).blur(function() {
			$("#image").css("backgroundImage","url('')");
			$("#image").text(msg);
		 });
	
	}
});


// My pictures are turned sideways... trying to fix that - but in slack Colleen said the photo appearnce does not matter - just the actions. Will try to fix if I have time. 




// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }

// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }
