const fetchBooks = () => data.books;

document.addEventListener('DOMContentLoaded', function() {
  console.log('loaded');
  const books = fetchBooks();
  const list = document.querySelector('.ui.relaxed.divided.list');
  const form = document.querySelector('.ui.form');

  list.addEventListener('click', function(ev) {
    ev.preventDefault();
    const clicked = ev.target;
    if (clicked.className === 'header') {
      const id = parseInt(clicked.dataset.id);
      const book = Book.findById(id);
      console.log(book);
      list.innerHTML = '';

      const markup = book.renderCard();
      list.appendChild(markup);
    }
  });

  form.addEventListener('submit', function(ev) {
    ev.preventDefault();
    const input = this.querySelector('input');
    const value = input.value.toLowerCase();
    input.value = '';

    const filteredBooks = Book.findByTitle(value);

    list.innerHTML = '';

    filteredBooks.forEach(bookData => {
      const book = new Book(bookData);
      const markup = book.renderListItem();
      list.appendChild(markup);
    });
  });

  books.forEach(bookData => {
    const book = new Book(bookData);
    const markup = book.renderListItem();
    list.appendChild(markup);
  });
});

class Book {
  constructor(props) {
    this.id = props.id;
    this.title = props.title;
    this.author = props.author;
    this.imageLink = props.imageLink;
    this.description = props.description;
    this.pages = props.pages;
    this.averageRating = props.averageRating;
    this.constructor.all.push(this);
  }

  static findById(bookID) {
    return this.all.find(({ id }) => {
      return id === bookId;
    });
  }

  static findByTitle(searchTerm) {
    return this.all.filter(({ title }) => {
      return title.toLowerCase().includes(searchTerm);
    });
  }

  renderListItem() {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
    <i class="large book middle aligned icon"></i>
    <div class="content">
      <a data-id="${this.id}" class="header" href="/">${this.title}</a>
      <div class="description">
        ${this.author}
      </div>
    </div>
    `;

    return div;
  }

  renderCard() {
    const div = document.createElement('div');
    div.className = 'ui fluid card';
    div.innerHTML = `
    <div class="image">
      <img src="${this.imageLink}"/>
    </div>
    <div class="content">
      <h1 class="ui header">
        ${this.title}
        <div class='sub header'>
          ${this.author}
        </div>
      </h1>
      <div class="meta">
        <span>${this.pages} pages</span>
      </div>
      <div class="ui divider"></div>
      <div class="description">
        ${this.description}
      </div>
    </div>
    `;
    return div;
  }
}

Book.all = [];
