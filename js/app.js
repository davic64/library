const CardsContainer = document.querySelector('.cards');

let myLibrary = [];

function Book(title, author, numPages, reading) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.reading = reading;
}

function addBook(title, author, numPages, reading) {
    const book = new Book(title, author, numPages, reading);
    myLibrary.push(book);
}

function enumerateBooks() {
    myLibrary.map(book => {
        const div = document.createElement('div');
        div.textContent = book.title
        CardsContainer.appendChild(div);
    });
}

enumerateBooks();