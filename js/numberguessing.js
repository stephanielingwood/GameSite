
var answer 

function User(name, guess, howClose) {
	this.name = name;
	this.guess = guess;
	this.howClose = howClose;

	this.calculate = function() {
		this.howClose = Math.abs(parseInt(this.guess) - answer);
	}
}

var getAnswer = function() {
	answer = Math.ceil(Math.random() * 10);
}	


$(document).ready(function(){
	getAnswer();
	$("#reveal1").hide();
	$("footer").hide();

	$("#playerName").on("click", function() {
		user1 = new User($("#user1_name").val());
		user2 = new User($("#user2_name").val());
//this passes the usernames into the part of the paragraph id'd
//as the spot for the different user names (via the span tag)
		$("#player1name").html(user1.name);
		$("#player2name").html(user2.name);
		$("#reveal1").show();
	});


//run the function when the player inputs their guess and clicks
	$("#playerGuess").on("click", function() {
		console.log(answer)

		user1.guess = ($("#user1_guess").val());
		user2.guess = ($("#user2_guess").val());

		console.log(user1.guess);
		console.log(user2.guess);

		user1.calculate();
		user2.calculate();
		
		var showResult = function(result){
			$("#gameResult").fadeOut("slow", function(){
				$("#gameResult").html(result);
				$("#gameResult").fadeIn("slow");
			});
		}		

		if (user1.guess == answer || user2.guess == answer) {
			if (user1.guess == answer && user2.guess == answer) {
				showResult("You tied!");
				$("footer").show();
			}
			else if (user1.guess == answer) {
				showResult(user1.name + " won!");
				$("footer").show();
			}
			else if (user2.guess == answer) {
				showResult(user2.name + " won!");
				$("footer").show();
			}
			else {
			}
		}

		else if ( user1.howClose < user2.howClose ) {
			showResult(user1.name + " is closer.");
		}
		else {
			showResult(user2.name + " is closer.");
		}


	});


	$("#playAgain").on("click", function(){
		$("#gameResult").fadeOut("slow");
		getAnswer();
		console.log(answer)
		$("#user1_name").val("");
		$("#user2_name").val("");	
		$("#user1_guess").val("");	
		$("#user2_guess").val("");
		user1.name = ""
		user2.name = ""
		$("#player1name").html(user1.name);
		$("#player2name").html(user2.name);
		$("#reveal1").hide();
		$("footer").hide();		
	});


// // make a jquery function that references a variable called "output"
// // example
// 	output = war.play();
// 	$("selector").fadeOut("slow", function(){
// 		$("selector").html(output);
// 		$("selector").fadeIn("slow");

});
//any jquery function needs the above line to close it
