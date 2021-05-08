const CardsContainer = document.querySelector('.cards');
const Modal = document.querySelector('.modal');
const form = document.querySelector("#form");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const numPages = document.querySelector("#numberPages");
const reading = document.querySelector("#reading");

let myLibrary = [];

function Book(title, author, numPages, reading) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.reading = reading;
}

function addBook(title, author, numPages, reading) {
    const book = new Book(title, author, numPages, reading);
    myLibrary.push({id: myLibrary.length, ...book});
}

function deleteBook(id) {
    myLibrary = myLibrary.filter(book => id !== book.id);
    enumerateBooks();
}

function enumerateBooks() {
    CardsContainer.textContent = "";
    myLibrary.map(book => {
        const div = document.createElement('div');
        const span = document.createElement('span');


        span.style.position = "absolute";
        span.style.top = "10px";
        span.style.right = "15px";
        span.style.fontSize = "14px";
        span.style.color ="#F35F5F"
        span.style.cursor ="pointer"
        span.addEventListener('click', () => deleteBook(book.id));


        span.textContent = "Delete"
        div.className = "card"
        div.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.numPages}</p>
            <p>Reading: ${book.reading}</p>
        `;
        div.appendChild(span);
        CardsContainer.appendChild(div);
    });
}

function openModal() {
    Modal.classList.toggle("closeModal");
}

form.addEventListener("submit", setBook);

function setBook(e) {
    debugger;
    e.preventDefault();
    addBook(title.value, author.value, numPages.value, reading.checked);
    openModal();
    title.value = "";
    author.value = "";
    numPages.value = "";
    reading.checked = false;
    enumerateBooks();
}

enumerateBooks();