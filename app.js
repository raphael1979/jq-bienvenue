var joliObj = new Object();


$("input").bind("keyup", function(x) {
	if (x.which !== 13) {
		id = $(this).attr("id");
		input = $(this).val();

	}
	else if (x.which === 13){
		$('input').each(function(){
			tId = $(this).attr("id");
			tInput = $(this).val();

			if(tInput.length > 0){
				joliObj[tId] = tInput;
				console.log(input + " " + tInput);
				console.log(joliObj);
			}
			else{
				console.log("rien");
			}
		})
		
	}});

$('button').click(function(){
	$('#username').html(joliObj.first_name + " " + joliObj.last_name);
	console.log(joliObj);
})








