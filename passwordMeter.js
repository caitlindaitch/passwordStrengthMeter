var password = document.getElementById("password");

password.addEventListener('keyup', function(){
	var passwordArray = password.value.split("");

	var rating = {
		specialChar: 0,
		lowercase: 0,
		uppercase: 0,
		numbers: 0
	}

	var validation = {
		isNumber: function(val){
			var pattern = /^\d+$/;
			return pattern.test(val);
		},
		isSpecialChar: function(val){

		}
	}

	console.log(passwordArray);

	for (var i=0; i<passwordArray.length; i++){
		if (validation.isNumber(passwordArray[i])){
			rating.numbers++;
		}
	}
});
