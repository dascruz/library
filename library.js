let myLibrary = [];
const bookGrid = document.getElementById("book-grid");
const addBookButton = document.getElementById("add-book");
const modal = document.querySelector("dialog");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    readText = this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readText}`;
  };
}

function addBookToLibrary() {
  let book = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  bookGrid.innerHTML = "";
  for (const book of myLibrary) {
    createBookCard(book);
  }
}

function createBookCard(book) {
  const bookCard = document.createElement("div");
  const bookTitle = document.createElement("div");
  const bookAuthor = document.createElement("div");
  const bookPages = document.createElement("div");
  const buttonGroup = document.createElement("div");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  bookCard.classList.add(
    "flex",
    "flex-col",
    "gap-4",
    "bg-white",
    "shadow",
    "items-center",
    "p-6",
    "justify-between"
  );
  buttonGroup.classList.add("flex", "self-end", "gap-4");
  readBtn.classList.add("border", "rounded", "p-2");
  removeBtn.classList.add("border", "rounded", "p-2");
  readBtn.onclick = () => {
    book.read = !book.read;
    if (book.read) {
      readBtn.textContent = "Read";
      readBtn.classList.add("bg-green-300");
      readBtn.classList.remove("bg-red-300");
    } else {
      readBtn.textContent = "Not read";
      readBtn.classList.add("bg-red-300");
      readBtn.classList.remove("bg-green-300");
    }
  };
  removeBtn.onclick = (e) => {
    myLibrary = myLibrary.filter((item) => item != book);
    e.target.parentNode.parentNode.remove();
  };

  bookTitle.textContent = `"${book.title || "No title"}"`;
  bookAuthor.textContent = book.author || "No author";
  bookPages.textContent = `${book.pages || "0"} pages`;
  removeBtn.textContent = "Remove";

  if (book.read) {
    readBtn.textContent = "Read";
    readBtn.classList.add("bg-green-300");
  } else {
    readBtn.textContent = "Not read";
    readBtn.classList.add("bg-red-300");
  }

  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  buttonGroup.appendChild(readBtn);
  buttonGroup.appendChild(removeBtn);
  bookCard.appendChild(buttonGroup);
  bookGrid.appendChild(bookCard);
}

function removeBook() {}

addBookButton.addEventListener("click", () => {
  modal.showModal();
});
