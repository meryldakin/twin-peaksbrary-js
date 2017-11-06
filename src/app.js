const baseURL = `https://www.googleapis.com/books/v1/volumes`;

class App {
  constructor() {
    this.list = document.querySelector('.ui.relaxed.divided.list');
    this.form = document.querySelector('.ui.form');
  }

  addAllEventListeners() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    this.list.addEventListener('click', this.handleItemClick.bind(this));
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const input = ev.target.querySelector('input');
    const value = input.value;
    input.value = '';
    this.list.innerHTML = '';

    // const request = new XMLHttpRequest();
    // request.open('GET', `${baseURL}?q=${value}`);
    //
    // request.onload = function() {
    //   const response = JSON.parse(this.response);
    //
    //   const books = response.items
    //     .map(item => {
    //       return {
    //         id: item.id,
    //         title: item.volumeInfo.title,
    //         author: item.volumeInfo.authors[0],
    //         pages: item.volumeInfo.pageCount,
    //         description: item.volumeInfo.description
    //       };
    //     })
    //     .map(bookData => {
    //       return new Book(bookData);
    //     });
    //
    //   app.renderBooks(books);
    // };
    //
    // request.send();

    fetch(`${baseURL}?q=${value}`)
      .then(res => res.json())
      .then(response => {
        const books = response.items
          .map(item => {
            return {
              id: item.id,
              title: item.volumeInfo.title,
              author: item.volumeInfo.authors[0],
              pages: item.volumeInfo.pageCount,
              description: item.volumeInfo.description
            };
          })
          .map(bookData => {
            return new Book(bookData);
          });

        this.renderBooks(books);
      });

    console.log('at the bottom');
    // const filteredBooks = Book.findByTitle(value);
    //
    // this.renderBooks(filteredBooks);
  }

  handleItemClick(ev) {
    ev.preventDefault();
    const clicked = ev.target;
    if (clicked.className === 'header') {
      const id = parseInt(clicked.dataset.id);
      const book = Book.findById(id);
      this.list.innerHTML = '';
      this.list.appendChild(book.renderCard());
    }
  }

  renderBooks(books) {
    books.forEach(book => {
      this.list.appendChild(book.renderListItem());
    });
  }
}
