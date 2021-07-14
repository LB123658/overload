var script = document.createElement("SCRIPT");
script.src = "https://lb123658.github.io/dark.mode/vintage.js";
document.body.appendChild(script);

document.body.onkeyup = function(e) {  
    if(e.keyCode = 13){
        go();
    } 
}

var i = 0;
var txt = "Please wait...\nFinding your name...\n\n................................................................................. NAME FOUND. \n\n Press ENTER to continue_";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();


function go() {
document.getElementById("demo").innerHTML = "<h2>Hello, " + window.location.href.split("Users/")[1].split("/")[0] + ".</h2>";
}

if (navigator.platform.slice(0, 3) == "Mac") {
  ;
} else {
  document.getElementById("demo").innerHTML = "Your name could not be found because you are using a " + navigator.platform + " computer.";
}
