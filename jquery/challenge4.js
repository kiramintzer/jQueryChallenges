$(document).ready(function(){
    $('#ch4form').submit(function(){
        var validInput = true;
       if ($("#fullname").val().length == 0){
           console.log("empty name field")
            $("#nameerrormsg").css("display","block");validInput = false; 
       }
       else{
           $("#nameerrormsg").css("display","none");
       }

       if ($("#streetaddr").val().length == 0){
           console.log("empty address field")
           $("#addrerrormsg").css("display","block");
           validInput = false;
       }
       else{
           $("#addrerrormsg").css("display","none");
       }
    return validInput
    });
});




// // ------
// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")

//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block"; 
//         validInput = false;
//     }

//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }
//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block"; 
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none"; 
//     }

//     return validInput;
// }