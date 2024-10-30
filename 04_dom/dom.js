"use strict";
let authorsDatabase = [
    "Douglas Adams",
    "Alexander Scheurer",
    "Stephen King"
];
class Book {
    constructor(_title, _authors, _pages, _chapters) {
        this.title = _title;
        this.pages = _pages;
        this.authors = _authors;
        this.chapters = _chapters;
    }
    toString() {
        return "book: { title: " + this.title + ", authors: " + this.authors + ", " + this.pages + " }";
    }
}
class EditedBook extends Book {
    constructor(_title, _editors, _pages, _chapters) {
        super(_title, [], _pages, _chapters);
        this.editors = _editors;
    }
    toString() {
        return "book: { title: " + this.title + ", editors: " + this.editors + ", " + this.pages + " }";
    }
}
let ebook = new EditedBook("Collection of Thing", [authorsDatabase[0], authorsDatabase[2]], 1234, []);
let book1 = new Book("Hitchhiker", [authorsDatabase[0]], 1287, ["K1", "K2"]);
let book2 = new Book("It", [authorsDatabase[2]], 123, ["It1", "It2"]);
class Bookcase {
    constructor(_room, _books) {
        this.room = _room;
        this.books = _books;
    }
    addBook(_newBook) {
        this.books.push(_newBook);
    }
    searchBook(_title) {
        const foundBooks = [];
        for (const book of this.books) {
            if (book.title.toLowerCase().includes(_title.toLowerCase())) {
                foundBooks.push(book);
            }
        }
        return foundBooks;
    }
}
let bookcase = new Bookcase("Shower", [book1, book2]);
bookcase.addBook(new Book("Doofe Thesis", [authorsDatabase[1]], 123, ["Blöd1", "Blöd22"]));
bookcase.addBook(ebook);
console.log(bookcase.searchBook("It"));
const searchButton = document.querySelector("button#searchbutton");
searchButton.addEventListener("click", mouseClick);
function mouseClick() {
    const searchTextInput = document.querySelector("input#searchtext");
    const searchResultDiv = document.querySelector("div#searchresult");
    searchResultDiv.innerHTML = "";
    const foundBooks = bookcase.searchBook(searchTextInput.value);
    for (const foundBook of foundBooks) {
        console.log(foundBook);
        searchResultDiv.innerHTML += "<div>" + foundBook + "</div>";
    }
}
//# sourceMappingURL=dom.js.map