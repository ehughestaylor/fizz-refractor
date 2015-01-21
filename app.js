(function(){
	var userInput = prompt("Please enter a number for fizzbuzz to count to.");
	var userNumber = parseInt(userInput);
	if (userNumber % 1 != 0){
		alert("Please enter a whole integer");
	} else {
		for(i = 1; i <= userNumber; i++){
			if (i % 15 == 0 ){
				console.log("fizzbuzz");
			} else if (i % 3 == 0) {
				console.log("fizz");
			} else if (i % 5 == 0) {
				console.log("buzz");
			} else {
				console.log(i);
			}
		};
	}
})();
