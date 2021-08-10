let bookLibrary = [];

function book(title, author, pages, readStatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
  }

function addBookToLibrary() {
  let title = prompt("Book title?")
  let author = prompt("Who's the author")
  let pages = prompt("How many pages?")
  let readStatus = prompt("Have you read it?")
  const newBook = new book(title, author, pages, readStatus)
  bookLibrary.push(newBook)
}