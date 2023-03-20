function generatePassword() {
	var length = document.getElementById("length").value;
	var lowercase = document.getElementById("lowercase").checked;
	var uppercase = document.getElementById("uppercase").checked;
	var numbers = document.getElementById("numbers").checked;
	var symbols = document.getElementById("symbols").checked;
	var password = "";

	var characters = "";
	if (lowercase) {
		characters += "abcdefghijklmnopqrstuvwxyz";
	}
	if (uppercase) {
		characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}
	if (numbers) {
		characters += "0123456789";
	}
	if (symbols) {
		characters += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
	}

	for (var i = 0; i < length; i++) {
		password += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	document.getElementById("password").value = password;
}
