var numOfSquares = 6
var colorPicker = randomPicker(numOfSquares);
var newGame = document.querySelector("#newColors");
var colorBoxes = document.querySelectorAll(".colorBoxes");
var number = Math.floor(Math.random() * 6);
var pickedColor = colorPicker[number];
var newRgb = document.querySelector("span");
var textDisplay = document.querySelector(".middleText");
var changeColor = document.querySelector("#newColors");
var divBG       = document.querySelector(".mainHeading");
var defaultLevel = document.querySelector("#defaultLevel");
var changeLevel = document.querySelector("#changeLevel");

for(var i = 0; i < colorBoxes.length; i++) {
//adding initial colors
	colorBoxes[i].style.backgroundColor = colorPicker[i];
//adding click listeners 
   colorBoxes[i].addEventListener("click", function() {
   	var clickedColor = this.style.backgroundColor;
   	if (clickedColor === pickedColor) {
      textDisplay.innerHTML = "Correct!!!";
      changeColor.innerHTML = "PLAY AGAIN?"
      divBG.style.backgroundColor = this.style.backgroundColor;
      matchColor(clickedColor);
    } else {
   		this.style.backgroundColor = "black";
   		textDisplay.innerHTML = "Try Again!";
   	}

   }); 
}
 

function matchColor(colors) {
	for(var i = 0; i < colorBoxes.length; i++) {
      colorBoxes[i].style.backgroundColor = colors;
}
}

function randomPicker(num) {
	//take an empty array to push values
	var arr = [];
   //add random color to each square
   for(var i = 0; i < num; i++) {
      arr.push(randomColor());
   }
   return arr;
}
  //To pic a radomcolor for forloop
  function randomColor() {
  	//to pic "red" part randomly
  	var r = Math.floor(Math.random() * 256);
  	//to pic "green" part randomly
  	var g = Math.floor(Math.random() * 256);
  	// to pic "blue" part
  	var b = Math.floor(Math.random() * 256);
  	return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  
newRgb.innerHTML = colorPicker[number].substring(3);
newGame.addEventListener("click",function() {
	changeColor.style.color = "green";
	changeColor.style.outline = "none";
		if (numOfSquares === 6) {
			defaultLevel.click();
		} else {
			changeLevel.click();
		}
	});
changeLevel.addEventListener("click", function() {
	defaultLevel.classList.remove("active");
	changeLevel.classList.add("active");
	divBG.style.backgroundColor = "green";
	changeColor.innerHTML = "NEW GAME";
	textDisplay.innerHTML = "";
	numOfSquares = 3;
    colorPicker = randomPicker(numOfSquares);
	number = Math.floor(Math.random() * 3);
	pickedColor = colorPicker[number];
	newRgb.innerHTML = colorPicker[number].substring(3);
    for(var i = 0; i < colorBoxes.length; i++) {
//adding initial colors
 if (colorPicker[i]) {
     colorBoxes[i].style.backgroundColor = colorPicker[i];
} else {
	colorBoxes[i].style.display = "none";
}
//adding click listeners 
 
   colorBoxes[i].addEventListener("click", function() {
   	var clickedColor = this.style.backgroundColor;
   	if (clickedColor === pickedColor) {
      textDisplay.innerHTML = "Correct!!!";
      changeColor.innerHTML = "PLAY AGAIN?"
      divBG.style.backgroundColor = this.style.backgroundColor;
      matchColor(clickedColor);
    } else {
   		this.style.backgroundColor = "black";
   		textDisplay.innerHTML = "Try Again!";
   	}

   }); 
  } 

 });
defaultLevel.addEventListener("click", function() {
    changeLevel.classList.remove("active");
    defaultLevel.classList.add("active");
    myFunction();  
});

function myFunction() {
	location.reload(true);
}


