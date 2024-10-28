"use strict";
const authorsDatabase = [
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
}
const book1 = new Book("Hitchhiker", [authorsDatabase[0]], 1287, ["K1", "K2"]);
const book2 = new Book("It", [authorsDatabase[2]], 123, ["It1", "It2"]);
class Bookcase {
    constructor(_room, _books) {
        this.room = _room;
        this.books = _books;
    }
    addBook(_newBook) {
        this.books.push(_newBook);
    }
    searchBook(_title) {
        for (const book of this.books) {
            if (book.title == _title) {
                return book;
            }
        }
        return;
    }
}
const bookcase = new Bookcase("Shower", [book1, book2]);
bookcase.addBook(new Book("Doofe Thesis", [authorsDatabase[1]], 123, ["Blöd1", "Blöd22"]));
console.log(bookcase.searchBook("It"));
//# sourceMappingURL=classes.js.map