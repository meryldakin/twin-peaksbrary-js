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

    // ***XML HTTP REQUEST***
    // let request = new XMLHttpRequest()
    // request.open("GET", baseURL + "?q=" + value)
    // let app = this
    // request.onload = function () {
    //   let response = JSON.parse(request.response)
    //   let books = response.items.map(book => {
    //     return new Book({
    //       id: book.id,
    //       title: book.volumeInfo.title,
    //       author: book.volumeInfo.authors[0],
    //       subtitle: book.volumeInfo.subtitle,
    //       description: book.volumeInfo.description,
    //       imageLinks: book.volumeInfo.imageLinks
    //     })
    //   })
    //   app.renderBooks(books)
    // }
    // request.send()


    // *** FETCH REQUEST ***
    fetch(baseURL + "?q=" + value)
      .then(response => response.json())
      .then(json => {
        let books = json.items.map(book => {
          return new Book({
            id: book.id,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors[0],
            subtitle: book.volumeInfo.subtitle,
            description: book.volumeInfo.description,
            imageLinks: book.volumeInfo.imageLinks

          })
        })
        this.renderBooks(books)
      })

    // *** Original Search: Only looking through the books inteh data.js file ***
    // const filteredBooks = Book.findByTitle(value)
    // this.renderBooks(filteredBooks)
  }

  renderBooks(books) {
    books.forEach(book => {
      this.list.appendChild(book.renderListItem());
    });
  }
}

