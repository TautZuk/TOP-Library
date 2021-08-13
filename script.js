const libraryContainer = document.querySelector("#booksContainer")
const newBook = document.createElement("div")
const bookTitle = document.createElement("p")
const bookAuthor = document.createElement("p")
const bookPages = document.createElement("p")
const bookReadStatus = document.createElement("p")

let bookLibrary = [ {
  title: "test",
  author: "test1",
  pages: "234",
  readStatus: "no"},
  {
    title: "Harry Potter",
    author: "Rowling",
    pages: "256",
    readStatus: "yes"}
];

function book(title, author, pages, readStatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
  };

const addNewBook = document.querySelector("#addNewBook")
addNewBook.addEventListener("click", () => {
  addBookToLibrary()
})

function addBookToLibrary() {
  let title = prompt("Book title?")
  let author = prompt("Who's the author")
  let pages = prompt("How many pages?")
  let readStatus = prompt("Have you read it?")
  const Book = new book(title, author, pages, readStatus)
  bookLibrary.push(Book)
  Display();
};

function Display() {
  const cellsToRemove = document.querySelectorAll(".book");
  for(let j = 0; j < cellsToRemove.length; j++){
    cellsToRemove[j].remove();
  };
  for (let i = 0; i < bookLibrary.length; i++) {
    const newBook = document.createElement("div")
    newBook.classList.add("book")
    newBook.setAttribute("id", i)
    const bookTitle = document.createElement("p")
    const bookAuthor = document.createElement("p")
    const bookPages = document.createElement("p")
    const bookReadStatus = document.createElement("p")
  libraryContainer.appendChild(newBook)
  bookTitle.textContent = "Title: " + bookLibrary[i].title
  newBook.appendChild(bookTitle)
  bookAuthor.textContent = "Author: " + bookLibrary[i].author
  newBook.appendChild(bookAuthor)
  bookPages.textContent = "Pages: " + bookLibrary[i].pages
  newBook.appendChild(bookPages)
  bookReadStatus.textContent = "ReadStatus: " + bookLibrary[i].readStatus
  newBook.appendChild(bookReadStatus)
}
}
Display();