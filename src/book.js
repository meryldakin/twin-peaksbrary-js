const Book = (() => {
  const all = [];

  return class Book {
    constructor(props) {
      this.id = props.id;
      this.title = props.title;
      this.subtitle = props.subtitle || "";
      this.author = props.author;
      this.thumbnail = props.imageLinks.thumbnail;
      this.description = props.description;
      all.push(this);
    }

    static all() {
      return all;
    }
    static findById(bookId) {
      return all.find(({ id }) => {
        return id === bookId;
      });
    }

    static findByTitle(searchTerm) {
      return all.filter(({ title }) => {
        return title.toLowerCase().includes(searchTerm);
      });
    }


    renderListItem() {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `
      <img src=${this.thumbnail}/>
      <div class="content">
        <a data-id="${this.id}" class="header" href="/">${this.title}</a>
        <div class="description">
          <p>${this.subtitle}</p>
          <p> by ${this.author}</p>
        </div>
      </div>
      `;

      return div;
    }

  };
})();
