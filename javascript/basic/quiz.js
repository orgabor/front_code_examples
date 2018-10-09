var questions = [
	{
		question 'End year of the 2nd World War',
		answer: 1945 
	},
	{
		question : 'How many states has the USA',
		answer : 50
	}



];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;

for (var i= 0; i < questions.length; i+=1){
	question = questions[i].question;
	answer = questions[i].answer;
	response = parseInt(prompt(question));

	if (response === answer){

		correctAnswers+=1;

	}

}
function print(message){
	document.write(message);
}
html = correctAnswers + " kerdest sikerült megvalaszolnod ebben a quizben";
print(html);