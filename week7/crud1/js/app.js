function addBook() {
  //read the book title field
  const bookName = document.getElementById('title').value;

  console.log('El libro es:', bookName);
  //insert to a database
  let booksDb = JSON.parse(localStorage.getItem('books'));
  if(!booksDb) {
    booksDb = [];
  }
  booksDb.push(bookName);
  localStorage.setItem('books', JSON.stringify(booksDb));
  //reload the book list
  showListOfBooks();
}

function showListOfBooks(){
  const bookName = localStorage.getItem('books');

  // read books from localstorage
  // generate the HTML table to show the boook
}


function validateTitle() {
  //read the book title field
  const bookName = document.getElementById('title').value;
  if(bookName.length > 3) {
    document.getElementById('add-book-button').disabled = false;
  } else {
    document.getElementById('add-book-button').disabled = true;
  }
}

showListOfBooks();