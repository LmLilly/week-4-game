$(document).ready(function(){
	//players random number 
	var randomNum = Math.floor(Math.random()*26);
	$(".randomNumber").html(randomNum);
	//players random nuber 19-120
	randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	$(".randomNumber").html(randomNum);
	//crystals random number 1-12


	//My variables
	var numberOptions = [10, 5, 3, 1];
	var ongoingScore = 0
	var loses = 0
	var wins = 0
	

     $(".crystal").on("click", function(){
     	 var myDataCol = $(this).attr("data-location")
     	 console.log(myDataCol);
     	 var myScore = numberOptions[myDataCol] 		
 		ongoingScore = ongoingScore + myScore
 		console.log(ongoingScore);

	$(".score").html(ongoingScore);

	if (ongoingScore > randomNum){
	//User loses
		loses = loses + 1
		$(".Loses").html("Loses: " + loses);

		for(var i = 0; i < numberOptions.length; i++){
			numberOptions[i] = Math.floor(Math.random()*26);
		}

		randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$(".randomNumber").html(randomNum);
		
		ongoingScore  = 0
		$(".score").html(ongoingScore);
	}
	else if (ongoingScore === randomNum){
		
			wins = wins + 1
		$(".Wins").html("Wins: " + wins);
	
		for(var i = 0; i < numberOptions.length; i++){
			numberOptions[i] = Math.floor(Math.random()*26);
		}
	}
 });
   
});


	

