function bigger() {
	document.getElementById("text").style.fontSize = "24pt";
}
function fancy(){
	alert("Fancy!");
	document.getElementById("text").style.fontWeight = "bold";
	document.getElementById("text").style.color = "blue";
	document.getElementById("text").style.textDecoration = "underline";
}
function boring(){
	document.getElementById("text").style.fontWeight = "normal";
	document.getElementById("text").style.color = "black";
	document.getElementById("text").style.textDecoration = "none";
}
function moo(){
	//This will upper case the text in the text area
	document.getElementById("text").value = document.getElementById("text").value.toUpperCase();
	var text = document.getElementById("text");
	var parts = text.value.split(".");
	text.value = parts.join(" Moo.");
}