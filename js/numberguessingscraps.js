// 	whole document inside of its own function that loads after the rest of the page loads
// 	jquery selector loaded
// (on loaded is an event)
// event handlers go at the top



	// var debug = false

	// var result


		// this.askName = function() {
		// 	this.name = prompt("Please type your name:");
		// }
		// this.askGuess = function() {
		// 	this.guess = prompt(this.name + " please type your guess:");
		// }


// function to pull values out of jQuery for names
// .on 

	// keepPlaying = true

	// do {



// function to pull values out of jQuery for names
// .on click
// replace these next two lines - create object with the stuff from the function
// e.preventDefault(); 
//lead the code inside the function with this line to keep default behavior from happening

//until the DOM is fully loaded, don't do anything. The only thing going 
//in this document.ready wrapper is the stuff involving a jQuery selecto


		// while (user1.guess != answer && user2.guess != answer) {
		// }	


	// 	})
		// alert("Let's find out who the first player is.");
		// user1.askName();
		// // if (debug = false) {
		// // 	console.log(user1.name);			
		// // }

		// alert("Okay, let's find out who the second player is.");
		// user2.askName();
		// // if (debug = false) {
		// // 	console.log(user2.name);			
		// // }	


		// alert("Great! Let's get ready to play. I'll choose a number between 1 and 10. Each of you will get to guess what it is. After you've both guessed, I'll tell you who was closer. First one to guess the number wins! Ready?");

		// while (user1.guess != answer && user2.guess != answer) {
		// 	user1.askGuess();
		// 	user2.askGuess();
		// 	user1.calculate();
		// 	user2.calculate();
		// 	if (user1.guess == answer || user2.guess == answer) {
		// 		if (user1.guess == answer && user2.guess == answer) {
		// 			alert("You tied!");
		// 		}
		// 		else if (user1.guess == answer) {
		// 			alert(user1.name + " won!");
		// 		}
		// 		else if (user2.guess == answer) {
		// 			alert(user2.name + " won!");
		// 		}
		// 		else {
		// 		}
		// 	}

		// 	else if ( user1.howClose < user2.howClose ) {
		// 		alert(user1.name + " is closer.");
		// 	}
		// 	else {
		// 		alert(user2.name + " is closer.");
		// 	}
		// }


		// okResponse = true

		// do {
		// 	var playMore = prompt("Thanks for playing! Play again? Type yes or no.");
		// 	if (playMore === "yes") {
		// 		alert("Okay, let's play again!");
		// 		okResponse = false
		// 	}
		// 	else if (playMore === "no") {
		// 		alert("Have a great day, number-guessers!");
		// 		okResponse = false
		// 		keepPlaying = false
		// 	}
		// 	else {
		// 		alert("Looks like you didn't type yes or no.")
		// 	}
		// } while(okResponse);

	// } while(keepPlaying);



		if (user1.guess == answer || user2.guess == answer) {
			if (user1.guess == answer && user2.guess == answer) {
				$("#gameResult").fadeOut("slow", function(){
					$("#gameResult").html("You tied!");
					$("#gameResult").fadeIn("slow");
				});
			}
			else if (user1.guess == answer) {
				$("#gameResult").fadeOut("slow", function(){
					$("#gameResult").html(user1.name + " won!");
					$("#gameResult").fadeIn("slow");
				});
			}
			else if (user2.guess == answer) {
				$("#gameResult").fadeOut("slow", function(){
					$("#gameResult").html(user2.name + " won!");
					$("#gameResult").fadeIn("slow");
				});
			}
			else {
			}
		}

		else if ( user1.howClose < user2.howClose ) {
			$("#gameResult").fadeOut("slow", function(){
				$("#gameResult").html(user1.name + " is closer.");
				$("#gameResult").fadeIn("slow");
			});
		}
		else {
			$("#gameResult").fadeOut("slow", function(){
				$("#gameResult").html(user2.name + " is closer.");
				$("#gameResult").fadeIn("slow");
			});
		}
