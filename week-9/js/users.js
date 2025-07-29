document.addEventListener('DOMContentLoaded', function() {
  // Ensure the DOM is fully loaded before attaching event listeners
  loadUsers(); // Load users when the document is ready
});

function loadUsers() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userList = document.getElementById('user_list');
  userList.innerHTML = ''; // Clear existing entries

  users.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>
        <a class="edit" data-index="${index}" href="user_edit.html?id=${index}">Edit</a>
        <a class="delete" data-index="${index} href="user_delete.html?id=${index}">Delete</a>
      </td>
    `;
    userList.appendChild(row);
  });

  // Attach event listeners for edit and delete buttons
  // document.querySelectorAll('.edit').forEach(button => {
  //   button.addEventListener('click', editUser);
  // });

  // document.querySelectorAll('.delete').forEach(button => {
  //   button.addEventListener('click', deleteUser);
  // });
}