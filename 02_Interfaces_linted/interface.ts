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

const authorsDatabase: string[] = [
  "Douglas Adams",
  "Alexander Scheurer",
  "Stephen King"
]

const book1: Book = {
  title: "Hitchhiker",
  pages: 1287,
  authors: [authorsDatabase[0]],
  chapters: ["Erstes Kapitel", "Chapert Two"]
}

const book2: Book = {
  title: "It",
  pages: 706,
  authors: [authorsDatabase[2]],
  chapters: ["Kapitel Zehn", "Kapitel Blub"]
}

const bookcase: Bookcase = { room: "Shower", books: [book1, book2] }

//               2              1
function read(_book: number, _chapter: number): string {

  const bookIndex: number = _book - 1
  const chapterIndex: number = _chapter - 1

  return bookcase.books[bookIndex].chapters[chapterIndex]
}

//                                 "It"
function howManyPagesDoesBookHave(_title: string): number {

  // for (let i = 0; i < bookcase.books.length; i++) {
  //   const book = bookcase.books[i];
  //   return book.pages
  // }

  // for (const i in bookcase.books) {
  //   const book = bookcase.books[i];
  //   return book.pages
  // }

  for (const book of bookcase.books) {
    if (book.title == _title) {
      return book.pages
    }
  }

  return -1
}

//                               _book, _chapter
const chapterIWannaRead: string = read(2, 1)

console.log(chapterIWannaRead)

console.log(howManyPagesDoesBookHave("It"))
