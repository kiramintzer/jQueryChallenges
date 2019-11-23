$(document).ready(function(){ 
	$("#useBilling").click(function(){
	if ($("#useBilling").is(":checked")) {
		$("#home").val($("#billing").val());
		$("#home").attr("disabled", "disabled");
	} 
	else {
		$("#home").removeAttr("disabled");
  	}
	})
})


// https://codepen.io/rubywahoo/pen/dmsBk?editors=1010

// remember: attr takes two args in ( )