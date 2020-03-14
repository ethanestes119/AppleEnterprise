function clicked() {

	var user = document.getElementById('username');
	var pass = document.getElementById('password');

	var adminuser = "admin","Guest";
	var adminpassword = "pass123","pass4guest";


	if(user.value == admin) {

		if(pass.value == adminpassword) {

			window.alert("You are logged in as " + user.value);
			window.open("https://appleh4ckz.github.io/AppleEnterprise/Website/index/");

		} else {

			window.alert("Please try again, Username or Password was typed incorrectly.");

		}

	} else {

			window.alert("Please try again, Username or Password was typed incorrectly.");

	}

}
