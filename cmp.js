'use strict'

//Image Uplaod
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

//Tools
const el = document.querySelector(".item");

el.addEventListener("mousedown", mousedown);

function mousedown(e){
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e){
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = el.getBoundingClientRect();

        el.style.left = rect.left - newX + "px";
        el.style.top = rect.top - newY + "px";

        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseup(){
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
    }
}