let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    readText = this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readText}`;
  }
}

function addBookToLibrary() {
  // do stuff here
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);
console.log(theHobbit.info());
