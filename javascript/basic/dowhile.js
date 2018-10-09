var randomNumber = getRandomNumber(5);
var guess;
var guessCount = 0;
var correctGuess = false ;

function getRandomNumber(upper){
	return Math.floor(Math.random() * upper) +1;
}
do{
	guess = prompt ('Gondoltam egy szamra egytöl 10-ig melyik lehet az?');
	guessCount += 1;
	if (parseInt(guess) === randomNumber){
		var correctGuess = true ;

	}
}while(!correctGuess)

document.write("<h1>Eltalatad a szamot!</h1>");
document.write("<p>" + guessCount + " probalkozasra volt szükseged, hogy elatald a " + randomNumber + "-s szamot!</p>");