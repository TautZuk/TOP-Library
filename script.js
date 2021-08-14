const libraryContainer = document.querySelector("#booksContainer")
const formTitle = document.getElementById("bookTitle")
const formAuthor = document.getElementById("bookAuthor")
const formPages = document.getElementById("bookPages")
const modal = document.getElementById("myModal");
const addNewBook = document.getElementById("addNewBook");
const span = document.getElementsByClassName("close")[0];
const removeBook = document.querySelectorAll("#removebtn")

let bookLibrary = [];

function book(title, author, pages, readStatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
  };

function addBookToLibrary() {
  let title = formTitle.value
  let author = formAuthor.value
  let pages = formPages.value
  if(document.getElementById('readStatus').checked){
    readStatus = "Yes"
  } else {
    readStatus = "No"
  }
  const Book = new book(title, author, pages, readStatus)
  bookLibrary.push(Book)
  Display();

  modal.style.display = "none";
  
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
    const removeButton = document.createElement("button")
  libraryContainer.appendChild(newBook)
  bookTitle.textContent = "Title: " + bookLibrary[i].title
  newBook.appendChild(bookTitle)
  bookAuthor.textContent = "Author: " + bookLibrary[i].author
  newBook.appendChild(bookAuthor)
  bookPages.textContent = "Pages: " + bookLibrary[i].pages
  newBook.appendChild(bookPages)
  bookReadStatus.textContent = "ReadStatus: " + bookLibrary[i].readStatus
  newBook.appendChild(bookReadStatus)
  removeButton.textContent = "Remove Book";
  removeButton.setAttribute("id", "removebtn")
  newBook.appendChild(removeButton)
}
const removeBook = document.querySelectorAll("#removebtn")
for(let i = 0; i < removeBook.length; i++) {
  const removeBook = document.querySelectorAll("#removebtn")
  const cellsToRemove = document.querySelectorAll(".book");
  removeBook[i].addEventListener("click", function() {
    let idNumber = parseInt(cellsToRemove[i].id)
    bookLibrary.splice(idNumber, 1)
    Display()
  })
}
}



addNewBook.onclick = function() {
  modal.style.display = "block";
  formTitle.value = "";
  formAuthor.value = "";
  formPages.value = "";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
Display();