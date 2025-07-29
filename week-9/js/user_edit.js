document.addEventListener('DOMContentLoaded', function() {
  // Ensure the DOM is fully loaded before attaching event listeners
  document.getElementById('edit_user')
    .addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    updateUser(); // Call the function to store inputs
  });

  loadUser(); // Load user data when the document is ready

});

function updateUser() {
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

function loadUser() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('id');
  const users = JSON.parse(localStorage.getItem('users')) || [];

  if (userId !== null && userId < users.length) {
    const user = users[userId];
    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
  } else {
    alert('User not found.');
  }
}