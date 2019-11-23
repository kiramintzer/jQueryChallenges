$(document).ready(function(){
    $('#ch3form').submit(function(){
        if ($('input[name="fruit"]:checked').is(":checked")) {
            return true
        } 
        alert("You must pick a fruit!");
            return false;
    })
    $('#ch3form').submit(function(){

       if ($('input[name="standing"]:checked').is(":checked")) {
            return true
        }
        alert("You must pick a standing!");
            return false;
    })
})


  // working code for just must pick a fruit: 

    // $(document).ready(function(){
    //     $('#ch3form').submit(function(){
    //         if ($('input[name="fruit"]:checked').is(":checked")) {
    //             return true
    //         } 
    //         alert("You must pick a fruit!");
    //             return false;
    //     })
    // })

    // https://www.codexworld.com/how-to/check-if-radio-button-in-group-checked-jquery/

// javascript:
    // $(document).ready(function(){
    //     $('#ch3form').click(function(){
    //         var check = true;
    //         $("input:radio").each(function(){
    //             var name = $(this).attr("name");
    //             if($("input:radio[name="+name+"]:checked").length == 0){
    //                 check = false;
    //             }
    //         });
            
    //         if(check){
    //             alert('One radio in each group is checked.');
    //         }else{
    //             alert('Please select one option in each question.');
    //         }
    //     });
    // });

   // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;
    
    // alert("You must pick a fruit!")
    // return false;


    // ----

    // ch3form.onsubmit = function() {
//     var fruit = 
//     document.querySelectorAll('input[name="fruit"]')


//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }

//     alert("You must pick a fruit!")
//     return false;

//   }

  
