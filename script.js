let targetNum;

targetNum = Math.floor((Math.random() * 100) + 1);
console.log(targetNum);
let resultDisplay = document.getElementById('result')

function checkResult(){
	let guess = parseInt(document.getElementById('number').value);	
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