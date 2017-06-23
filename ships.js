var location1=3;
var location2=4;
var location3=5;
var guess;
var hitsNumber = 0;
var guessesNumber = 0;
var isSunk = false;

while (isSunk==false) {
	guess = prompt("Ready, steady, go - type number from 0 to 6: ");

	if(guess<0||guess>6){
		alert("Type correct number range 0 to 6: ");
	} else {
		guessesNumber = guessesNumber+1;

	if (guess==location1||guess==location2||guess==location3) {
		hitsNumber=hitsNumber+1;
		alert("Great Success! You've hit the enemy ship!");
		
		if(hitsNumber==3){
			isSunk=true;
			alert("You won!");
		}
	}
		else{
			alert("You missed! Try again!");
		}
	}
}
alert("Wykonałeś "+guessesNumber+" prób."+"Twoja efektywność to: "+(3/guessesNumber)+".");
