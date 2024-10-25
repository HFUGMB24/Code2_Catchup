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
}
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
        for (const book of this.books) {
            if (book.title == _title) {
                return book;
            }
        }
        return;
    }
}
let bookcase = new Bookcase("Shower", [book1, book2]);
bookcase.addBook(new Book("Doofe Thesis", [authorsDatabase[1]], 123, ["Blöd1", "Blöd22"]));
console.log(bookcase.searchBook("Bible"));
//               2              1
function read(_book, _chapter) {
    let bookIndex = _book - 1;
    let chapterIndex = _chapter - 1;
    return bookcase.books[bookIndex].chapters[chapterIndex];
}
//                                 "It"
function howManyPagesDoesBookHave(_title) {
    // for (let i = 0; i < bookcase.books.length; i++) {
    //   const book = bookcase.books[i];
    //   if (book.title == _title) {
    //     return book.pages
    //   }
    // }
    // for (const i in bookcase.books) {
    //   const book = bookcase.books[i];
    //   if (book.title == _title) {
    //     return book.pages
    //   }
    // }
    for (const book of bookcase.books) {
        if (book.title == _title) {
            return book.pages;
        }
    }
    return -1;
}
//                                   _book  _chapter
let chapterIWannaRead = read(2, 1);
//console.log(howManyPagesDoesBookHave("It"))
//# sourceMappingURL=classes.js.map