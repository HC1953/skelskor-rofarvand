document
.getElementById("fullscreenButton")
.addEventListener("click",()=>{

if(!document.fullscreenElement){

document.documentElement.requestFullscreen();

}else{

document.exitFullscreen();

}

});

document
.getElementById("gpsButton")
.addEventListener("click",()=>{

alert("GPS-funktion kommer i version 2.1");

});
