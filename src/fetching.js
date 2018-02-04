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

    // fetch(`${baseURL}?q=${value}`)
    //   .then(res => res.json())
    //   .then(response => {
    //     const books = response.items
    //       .map(item => {
    //         return {
    //           id: item.id,
    //           title: item.volumeInfo.title,
    //           author: item.volumeInfo.authors[0],
    //           pages: item.volumeInfo.pageCount,
    //           description: item.volumeInfo.description
    //         };
    //       })
    //       .map(bookData => {
    //         return new Book(bookData);
    //       });

    //     this.renderBooks(books);
    //   });

    // renderCard() {
    //     const div = document.createElement('div');
    //     div.className = 'ui fluid card';
    //     div.innerHTML = `
    //     <div class="image">
    //       <img src="${this.imageLink}"/>
    //     </div>
    //     <div class="content">
    //       <h1 class="ui header">
    //         ${this.title}
    //         <div class='sub header'>
    //           ${this.author}
    //         </div>
    //       </h1>
    //       <div class="meta">
    //         <span>${this.pages} pages</span>
    //       </div>
    //       <div class="ui divider"></div>
    //       <div class="description">
    //         ${this.description}
    //       </div>
    //     </div>
    //     `;
    //     return div;
    //   }

    // handleItemClick(ev) {
    //     ev.preventDefault();
    //     const clicked = ev.target;
    //     if (clicked.className === 'header') {
    //       const id = clicked.dataset.id;
    //       const book = Book.findById(id);
    //       this.list.innerHTML = '';
    //       this.list.appendChild(book.renderCard());
    //     }
    //   }

    // this.list.addEventListener('click', this.handleItemClick.bind(this))