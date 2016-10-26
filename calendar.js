function checkPassword()
{
	var pass1 = document.getElementById('pass1');
	var pass2 = document.getElementById('pass2');
	
	var message = document.getElementById('confirmMessage');
	
	var match = "#66cc66";
	var noMatch = "#ff6666";
	
	if(pass1.value == pass2.value)
	{
		pass2.style.backgroundColor = match;
		message.style.color = match;
		message.innerHTML = "Passwords Match!"
	}
	else
	{
		pass2.style.backgroundColor = noMatch;
		message.style.color = noMatch;
		message.innerHTML = "Passwords do not match"
		$("#submit").attr("disabled", "disabled");
	}
}

function disableSubmit()
{
	
}