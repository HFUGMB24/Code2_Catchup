"use strict";
let authorsDatabase = [
    "Douglas Adams",
    "Alexander Scheurer",
    "Stephen King"
];
let book1 = {
    title: "Hitchhiker",
    pages: 1287,
    authors: [authorsDatabase[0]],
    chapters: ["Erstes Kapitel", "Chapert Two"]
};
let book2 = {
    title: "It",
    pages: 706,
    authors: [authorsDatabase[2]],
    chapters: ["Kapitel Zehn", "Kapitel Blub"]
};
let bookcase = { room: "Shower", books: [book1, book2] };
//               2              1
function read(_book, _chapter) {
    let bookIndex = _book - 1;
    let chapterIndex = _chapter - 1;
    return bookcase.books[bookIndex].chapters[chapterIndex];
}
//                                 "It"
function howManyPagesDoesBookHave(_title) {
    for (const book of bookcase.books) {
        if (book.title == _title) {
            return book.pages;
        }
    }
    return -1;
}
//                                   _book  _chapter
let chapterIWannaRead = read(2, 1);
console.log(howManyPagesDoesBookHave("It"));
//# sourceMappingURL=interface.js.map