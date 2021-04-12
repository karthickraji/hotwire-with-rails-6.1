import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["query", "books"] 

  submit() {
    console.log("search books")
    const value = this.queryTarget.value
    fetch(`/books/search?query=${value}`, {
      headers: { accept: 'application/json'}
    }).then((response) => response.json())
      .then(data => { 
        var bookHTML = "";
        var bookArray = Object.values(data)[0]
        bookArray.forEach(book => {
          bookHTML += this.bookTemplate(book); 
        });
        this.booksTarget.innerHTML = `<turbo-frame id="books">${bookHTML}</turbo-frame>`;
      });  
  }

  bookTemplate(book) {
    return `<turbo-frame id="book_${book.id}"><div class="card mb-3"><div class="card-body">
  <h5 class="card-title">${book.title}</h5>
  <p class="card-text">${book.isbn} | ${book.total_pages}</p>
  <p class="card-text">${book.published_date}</p>
  </div>
  <div class="card-footer">
  <a data-turbo-frame="_top" href="/books/${book.id}">Show</a> | <a data-turbo-frame="_top" href="/books/${book.id}/edit">Edit</a> |
  <a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/books/${book.id}">Destroy</a>
  </div>
  </div></turbo-frame>
  `
  }

  // submit() {
  // const value = this.queryTarget.value
  // fetch(`/books/search?query=${value}`, {
  // headers: { accept: 'application/json'}
  // }).then((response) => response.text())
  // .then(data => console.log(data))
  // }



  connect() {
    // this.element.textContent = "Hello World! from books controller js"
    console.log("hello from stimulus books")
  }
}
