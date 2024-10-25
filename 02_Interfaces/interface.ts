interface Book {
  title: string;
  pages: number;
  authors: string[];
  chapters: string[]
}

interface Bookcase {
  room: string
  books: Book[]
}

let authorsDatabase: string[] = [
  "Douglas Adams",
  "Alexander Scheurer",
  "Stephen King"
]

let book1: Book = {
  title: "Hitchhiker",
  pages: 1287,
  authors: [authorsDatabase[0]],
  chapters: ["Erstes Kapitel", "Chapert Two"]
}

let book2: Book = {
  title: "It",
  pages: 706,
  authors: [authorsDatabase[2]],
  chapters: ["Kapitel Zehn", "Kapitel Blub"]
}

let bookcase: Bookcase = { room: "Shower", books: [book1, book2] }

//               2              1
function read(_book: number, _chapter: number): string {

  let bookIndex: number = _book - 1
  let chapterIndex: number = _chapter - 1

  return bookcase.books[bookIndex].chapters[chapterIndex]
}

//                                 "It"
function howManyPagesDoesBookHave(_title: string): number {

  for (const book of bookcase.books) {

    if (book.title == _title) {
      return book.pages
    }

  }

  return -1
}

//                               _book, _chapter
let chapterIWannaRead: string = read(2, 1)

console.log(howManyPagesDoesBookHave("It"))

