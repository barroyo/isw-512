document.addEventListener('DOMContentLoaded', function() {
  // Ensure the DOM is fully loaded before attaching event listeners
  document.getElementById('registration_form')
    .addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    storeInputs(); // Call the function to store inputs
  });
});

function storeInputs() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const password2 = document.getElementById('password2').value;
  if (password === password2) {
    //save to localstorage as a JSON object
    const userData = {
      name: name,
      email: email,
      password: password,
    }

    let users = JSON.parse(localStorage.getItem('users'));
    if (users) {
      users.push(userData);
    } else {
      users = [userData];
    }

    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    return true;
  } else {
    alert('Passwords do not match. Please try again.');
    return false;
  }
}