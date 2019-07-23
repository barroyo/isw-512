function validateUser() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	let errorElement = document.getElementById('error_msg')
	console.log('username:', username, ' password:', password);
	if (username == 'admin' && password == 'password') {
		console.log('logged in')
		errorElement.setAttribute("style", "display:none;");
		let auditlog = {
			'date': new Date(),
			'username': username,
			'browser': window.navigator.appVersion
		}
		localStorage.setItem('auditlogs', JSON.stringify([auditlog]));

		alert(`Welcome ${username}!`);
	} else {
		errorElement.innerHTML = 'Username or Password invalid';
		errorElement.setAttribute("style", "display:block;");
	}
}


function printCurrentDate() {
	let date = new Date();
	let dateDiv = document.getElementById('currentDate');
	dateDiv.innerHTML = `The current date is ${date}`;
	console.log('date:', date);
}

function printCurrentLocation() {
	let location = window.location.href;
	console.log('The locatio is:', location);
}

printCurrentDate();
printCurrentLocation();