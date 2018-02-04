const baseURL = `https://www.googleapis.com/books/v1/volumes`;

class App {
  constructor() {
    this.list = document.querySelector('.ui.relaxed.divided.list');
    this.form = document.querySelector('.ui.form');
    this.form.addEventListener('submit', this.handleSubmit.bind(this));

  }

  handleSubmit(ev) {
    ev.preventDefault();
    const input = ev.target.querySelector('input');
    const value = input.value;
    input.value = '';
    this.list.innerHTML = '';
    let filteredBooks = Book.findByTitle(value);
    this.renderBooks(filteredBooks)

  }

  renderBooks(books) {
    books.forEach(book => {
      this.list.appendChild(book.renderListItem());
    });
  }
}

