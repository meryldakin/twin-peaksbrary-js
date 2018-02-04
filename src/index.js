const fetchBooks = () => data.books;
// Google Books API docs:
// https://developers.google.com/books/docs/v1/using
// search term:
// `https://www.googleapis.com/books/v1/volumes?q=twin+peaks`


document.addEventListener('DOMContentLoaded', function () {
  const app = new App();


  app.renderBooks(fetchBooks().map(bookData => new Book(bookData)));

});
