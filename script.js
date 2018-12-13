var targetNum;

targetNum = Math.floor((Math.random() * 100) + 1);
console.log(targetNum);
var resultDisplay = document.getElementById('result')

function checkResult(){
	var guess = parseInt(document.getElementById('number').value);	
	console.log(guess,targetNum);
	if(guess == null){
		return;
	}
	else if(guess==targetNum){	
		resultDisplay.style.color = "#4BB543";
		resultDisplay.innerHTML = "You got it!";
	}
	else if(guess > targetNum){
		resultDisplay.style.color = "#d9534f";
		resultDisplay.innerHTML = "Too High";
	}
	else{
		resultDisplay.style.color = "#d9534f";
		resultDisplay.innerHTML = "Too Low";
	}
}