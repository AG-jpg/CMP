'use strict'

//Image Uplaod
let img=document.getElementById("img");
let button=document.getElementById("button");

button.addEventListener("change", function(){
    console.log(this.files[0].name)
    if(this.files[0].type != 'image/jpeg' && this.files[0].type != 'image/png'){
        alert("You can only uplaod JPG or PNG Files");
    }else{
        img.src=URL.createObjectURL(this.files[0])
    }
});

//Tools
$(document).ready(function(){

    //Draggable Item
    $('.item').draggable();

    //Draggable Note
    $('.note').draggable();

    //Remove note
    $('.fas').on('click', function() {
       $(this).parent().parent().remove();
      });

      //Create Note
    $('#add_note').on('click', function(){
        
        var newNote = '<div class="note noteNew"><div class="close"><i class="fas fa-times"></i></div><textarea placeholder="comments"></textarea></div>';
        $('#notes').append(newNote);
        $('.noteNew').draggable();
        $('.fas').on('click', function() {
            $(this).parent().parent().remove();
           });
    });
});