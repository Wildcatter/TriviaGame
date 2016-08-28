var counter = 0;
var stupid = $('#answerDiv');
var chosen;
var correct=0;
var incorrect=0;
var countTime;
 /*function timer() {
	$("#timeDiv").html(time);
	time--;
	if (time == 0) {
		clearInterval(countdown);
	}
}; */

var create = function () {
	if (counter == quiz.questions.length) {
		$(".questionDiv").html("GAME OVER");
		//$(".answerDiv").html("You got");
	};
	var time=30;
	clearInterval(countTime);
	$("#timeDiv").empty();
	$("#questionDiv").html("Question " + [counter + 1] + " of " + quiz.questions.length + "<br>" + quiz.questions[counter]);
	$(".one").text(quiz.choices[counter][0]);
	$(".two").text(quiz.choices[counter][1]);
	$(".three").text(quiz.choices[counter][2]);
	$(".four").text(quiz.choices[counter][3]);
	countTime = setInterval(function() {
					time--;
					$("#timeDiv").html(time);
					if (time==0) {
						$("#answerDiv").html("Weak bro.");
						clearInterval(countTime);
					};
				}, 1000);
}

function createTimed() {
	setTimeout(create, 2000);
};

var quiz = {
	questions: ["How do you call jQuery?", "What is correct Object notation?", "What argument does not return a false conditional result in Javascript?"],
	choices: [["!", "*", "$", "&"], ["( )", "{ }", "[ ]", "! !"], ["Undefined", "Null", "' . '", "+0"]],
	answers: ["$", "{ }", "' . '"],
};

$(document).ready(function(){
$("#answerDiv").hide();

$(".start").on("click", function(){
	$(".start").remove();
	$("#answerDiv").show();
	create();
	/*countTime = setInterval(function() {
					time--;
					$("#timeDiv").html(time);
					if (time==0) {
						$("#answerDiv").html("YOU SUCK");
					};
				}, 1000); */
});

$(".shh").on("click", function(){
	chosen = $(this).text();
	if (chosen == quiz.answers[counter]) {
		$("#questionDiv").html("Correct!");
		correct++;
		counter++
	}else {
		$("#questionDiv").html("Wrong! The correct answer is " + quiz.answers[counter]);
		incorrect++;
		counter++
	};

	createTimed();
});



});