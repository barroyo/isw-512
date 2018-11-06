function validateUser() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	var errorElement = document.getElementById('error_msg');

	if (username == 'admin' && password == 'password') {
		console.log('logged in');
		localStorage.setItem('username', username);
		errorElement.innerHTML = 'User is valid';
		errorElement.setAttribute("style","display:block;");
	} else {
		errorElement.innerHTML = 'Username or Password invalid';
		errorElement.setAttribute("style","display:block;");
	}
}