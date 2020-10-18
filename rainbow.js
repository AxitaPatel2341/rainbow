document.querySelector(".color00").addEventListener("input",bbcolor);
document.querySelector(".color01").addEventListener("input",bbcolor);
var color00 = document.querySelector(".color00");
var color01 = document.querySelector(".color01");
var body = document.querySelector("body");
function bbcolor(){
	body.style.background = "linear-gradient( to right," + color00.value + "," + color01.value + ")"
}


document.querySelector(".color1").addEventListener("input",bcolor);
document.querySelector(".color2").addEventListener("input",bcolor);
document.querySelector(".color3").addEventListener("input",bcolor);
document.querySelector(".color4").addEventListener("input",bcolor);
document.querySelector(".color5").addEventListener("input",bcolor);
document.querySelector(".color6").addEventListener("input",bcolor);
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var color5 = document.querySelector(".color5");
var color6 = document.querySelector(".color6");
var boxbody = document.querySelector("#box");
function bcolor(){
	boxbody.style.background = "radial-gradient(" + color1.value + "," + color2.value + "," + color3.value + "," + color4.value + "," + color5.value + "," + color6.value + " 480px" + ")"
}


document.querySelector(".color8").addEventListener("input",changePTextColor);
var content = document.querySelectorAll("p");
var color8 = document.querySelector(".color8");
function changePTextColor(){
	for(i = 0; i < content.length; i++){
		content[i].style.color = color8.value;
	}
}

document.querySelector(".color9").addEventListener("input",changeHTextColor);
var content1 = document.querySelectorAll("h2");
var color9 = document.querySelector(".color9");
function changeHTextColor(){
	for(i = 0; i < content1.length; i++){
		content1[i].style.color = color9.value;
	}
}

