var location1=3;
var location2=4;
var location3=5;
var guess;
var hitsNumber = 0;
var guessesNumber = 0;
var isSunk = false;

while (isSunk==false) {
	guess = prompt("Ready, steady, go - type number from 0 to 6: ");
	if(guess!=location1&&guess!=location2&&guess!=location3){
		guessesNumber = guessesNumber+1;
		alert("Type correct number");
	}
	else if (guess==location1||guess!=location2||guess!=location3) {
		hitsNumber=hitsNumber+1;
		if(hitsNumber=3){
			isSunk=true;
			alert("Brawo, wygrałeś!");
		}
	}

}
alert("Wykonałeś "+guessesNumber+" prób");
