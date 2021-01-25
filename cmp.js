'use strict'

let img=document.getElementById("img");
let button=document.getElementById("button");

button.addEventListener("change", function(){
    console.log(this.files[0].name)
    console.log(this.files[0].type)
    if(this.files[0].type != 'image/jpeg'&&this.files[0].type != 'image/png'){
        alert("You can only uplaod JPG or PNG Files");
    }else{
        img.src=URL.createObjectURL(this.files[0])
    }
});