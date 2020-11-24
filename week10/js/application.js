
function validateUser() {
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const errorElement = document.getElementById('error_msg');

	if (username == 'admin' && password == 'password') {
		console.log('logged in');
		// localStorage.setItem('username', username);
		errorElement.innerHTML = 'User is valid';
		errorElement.setAttribute("style", "display:block;");
	} else {
		errorElement.innerHTML = 'Username or Password invalid';
		errorElement.setAttribute("style", "display:block;");
	}
}

function saveUser() {
	var username = document.getElementById('username').value;
	var firstname = document.getElementById('firstname').value;
	var password = document.getElementById('password').value;

	var user = {
		username,
		firstname,
		password
	};

	if (saveToLocalStorage('users', user)) {
		console.log('User saved');
	}
}

/**
 * Binds the different events to the different elements of the page
 */
function bindEvents() {
	document.getElementById('login-button').addEventListener('click', loginButtonHandler);
	// document.getElementById('register-button').addEventListener('click', registerButtonHandler);
	// jQuery('#login-button').bind('click', loginButtonHandler);
	// jQuery('#register-button').bind('click', registerButtonHandler);
}

function loginButtonHandler(element) {
	validateUser();
}

// function registerButtonHandler(element) {
// 	saveUser();
// }

bindEvents();