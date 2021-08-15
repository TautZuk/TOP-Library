const libraryContainer = document.querySelector("#booksContainer")
const formTitle = document.getElementById("bookTitle")
const formAuthor = document.getElementById("bookAuthor")
const formPages = document.getElementById("bookPages")
const formCheckbox = document.getElementById("readStatus")
const popupForm = document.getElementById("myPopupForm");
const addNewBook = document.getElementById("addNewBook");
const close = document.getElementsByClassName("close")[0];

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
    readStatus = "I have read it"
  } else {
    readStatus = "I haven't read it"
  }
  const Book = new book(title, author, pages, readStatus)
  bookLibrary.push(Book)
  populateStorage()
  Display();
  popupForm.style.display = "none";
};

book.prototype.changeStatus = function () {
  if (this.readStatus == "I have read it") {
    this.readStatus = "I haven't read it"
  } else {
    this.readStatus = "I have read it"
  }
}

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
    const buttonsDiv = document.createElement("div")
    buttonsDiv.classList.add("buttons")
    const removeButton = document.createElement("button")
    const changeStatus = document.createElement("button")
  libraryContainer.appendChild(newBook)
  bookTitle.textContent += bookLibrary[i].title
  newBook.appendChild(bookTitle)
  bookAuthor.textContent += bookLibrary[i].author
  newBook.appendChild(bookAuthor)
  bookPages.textContent = bookLibrary[i].pages + " pages"
  newBook.appendChild(bookPages)
  bookReadStatus.textContent += bookLibrary[i].readStatus
  newBook.appendChild(bookReadStatus)
  newBook.appendChild(buttonsDiv)
  changeStatus.textContent = "Change Read Status";
  changeStatus.setAttribute("id", "changeStatus");
  buttonsDiv.appendChild(changeStatus)
  removeButton.textContent = "Remove Book";
  removeButton.setAttribute("id", "removebtn");
  buttonsDiv.appendChild(removeButton)

}

const removeBook = document.querySelectorAll("#removebtn")
for(let i = 0; i < removeBook.length; i++) {
  const cellsToRemove = document.querySelectorAll(".book");
  removeBook[i].addEventListener("click", function() {
    let idNumber = parseInt(cellsToRemove[i].id)
    bookLibrary.splice(idNumber, 1)
    populateStorage()
    Display();
  });
};

const changeReadStatus = document.querySelectorAll("#changeStatus")
for(let i = 0; i < changeReadStatus.length; i++) {
  changeReadStatus[i].addEventListener("click", () => {
    bookLibrary[i].changeStatus()
    Display();
  })
}

};

function populateStorage() {
  window.localStorage.setItem('Library', JSON.stringify(bookLibrary))
}

function getFromLocal() {
  if (window.localStorage.getItem("Library") !==null){
  bookLibrary = JSON.parse(window.localStorage.getItem("Library"))
  for (let i = 0; i<bookLibrary.length; i++) {
    bookLibrary[0].__proto__.changeStatus = function () {
      if (this.readStatus == "I have read it") {
        this.readStatus = "I haven't read it"
      } else {
        this.readStatus = "I have read it"
      }
    }
  }
  } else {
    return
  }
}

addNewBook.onclick = function() {
  popupForm.style.display = "block";
  formTitle.value = "";
  formAuthor.value = "";
  formPages.value = "";
  formCheckbox.checked = false;
}

close.onclick = function() {
  popupForm.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popupForm) {
    popupForm.style.display = "none";
  }
} 
getFromLocal()
Display()