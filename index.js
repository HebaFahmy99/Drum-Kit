
var numOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0 ; i <numOfDrumButtons ; i++)
{
	document.querySelectorAll(".drum")[i].addEventListener("click", function(){
		// this.style.color = "white";
	var buttonInnerHtml = this.innerHTML;

	makeSound(buttonInnerHtml);
	buttonAnimation(buttonInnerHtml);

	switch(buttonInnerHtml)
	{ 
		case "w":
			var audioW = new Audio("sounds/tom-1.mp3");
			audioW.play();
		break;

		case "a":
			var audioA = new Audio("sounds/tom-2.mp3");
			audioA.play();
		break;

		case "s":
			var audioS = new Audio("sounds/tom-3.mp3");
			audioS.play();
		break;

		case "d":
			var audioD = new Audio("sounds/tom-4.mp3");
			audioD.play();
		break;

		case "j":
			var audioJ = new Audio ("sounds/snare.mp3");
			audioJ.play();
		break;

		case "k":
			var audioK = new Audio("sounds/crash.mp3");
			audioK.play();
		break;

		case "l":
			var audioL = new Audio("sounds/kick-bass.mp3");
			audioL.play();
		break;

		default:
			console.log("buttonInnerHtml");


	}
	});
}


document.addEventListener("keydown", function(event){ 
	makeSound(event.key);
	buttonAnimation(event.key);

});

function makeSound(key)
{ 
	switch(key)
	{ 
		case "w":
			var audioW = new Audio("sounds/tom-1.mp3");
			audioW.play();
		break;

		case "a":
			var audioA = new Audio("sounds/tom-2.mp3");
			audioA.play();
		break;

		case "s":
			var audioS = new Audio("sounds/tom-3.mp3");
			audioS.play();
		break;

		case "d":
			var audioD = new Audio("sounds/tom-4.mp3");
			audioD.play();
		break;

		case "j":
			var audioJ = new Audio ("sounds/snare.mp3");
			audioJ.play();
		break;

		case "k":
			var audioK = new Audio("sounds/crash.mp3");
			audioK.play();
		break;

		case "l":
			var audioL = new Audio("sounds/kick-bass.mp3");
			audioL.play();
		break;

		default:
			console.log(buttonInnerHtml);


	}
}


function buttonAnimation(currentKey)
{ 
	var activeButton = document.querySelector("." + currentKey).classList.add("pressed");

	setTimeout(function(){ 
		activeButton.classList.remove("pressed");} , 100);

}