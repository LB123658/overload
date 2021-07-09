setInterval(myTimer, 1);
document.getElementById("demo").style.width = "99%";
function myTimer() {
var z = document.getElementById("demo").innerHTML + document.getElementById("demo").innerHTML.length + " ";
document.getElementById("demo").innerHTML = z;
document.getElementById("title").innerHTML = document.getElementById("demo").innerHTML.length + " characters<br>Each number shows the number of characters there were when it was written";

var myDiv = document.getElementById("demo");
myDiv.scrollTop = myDiv.scrollHeight;
}
