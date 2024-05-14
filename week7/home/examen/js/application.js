function validateUser() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	let errorElement = document.getElementById('error_msg')

	if (username == 'admin' && password == 'password') {
		errorElement.setAttribute("style", "display:none;");
		let auditlog = {
			'date': new Date(),
			'username': username,
			'browser': window.navigator.appVersion
		};
		localStorage.setItem('auditlogs', JSON.stringify([auditlog]));

		alert(`Welcome ${username}!`);
	} else {
		errorElement.innerHTML = 'Username or Password invalid';
		errorElement.setAttribute("style", "display:block;");
	}
}

function validateUsername() {
	let username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	const errorElement = document.getElementById('error_msg')

	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        if(this.responseText == 'true') {
					document.getElementById("messages").innerHTML = "El correo existe";
				} else {
					document.getElementById("messages").innerHTML = "El correo no existe";
				}
      }
    };
	xhttp.open("GET", "http://isw512.com/javascript/home/validate.php?username="+username+"&password="+password, true);
	xhttp.send();
}

document.getElementById('username').addEventListener("click", validateUsername);