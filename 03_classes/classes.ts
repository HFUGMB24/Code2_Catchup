let authorsDatabase: string[] = [
  "Douglas Adams",
  "Alexander Scheurer",
  "Stephen King"
]

class Book {
  title: string;
  pages: number;
  authors: string[];
  chapters: string[]
  constructor(_title: string, _authors: string[], _pages: number, _chapters: string[]) {
    this.title = _title
    this.pages = _pages
    this.authors = _authors
    this.chapters = _chapters
  }
}

let book1: Book = new Book("Hitchhiker", [authorsDatabase[0]], 1287, ["K1", "K2"])
let book2: Book = new Book("It", [authorsDatabase[2]], 123, ["It1", "It2"])

class Bookcase {
  room: string
  books: Book[]
  constructor(_room: string, _books: Book[]) {
    this.room = _room
    this.books = _books
  }

  addBook(_newBook: Book) {
    this.books.push(_newBook)
  }

  searchBook(_title: string): Book | undefined {
    for (const book of this.books) {
      if (book.title == _title) {
        return book
      }
    }
    return undefined
  }
}

let bookcase: Bookcase = new Bookcase("Shower", [book1, book2])

bookcase.addBook(new Book("Doofe Thesis", [authorsDatabase[1]], 123, ["Blöd1", "Blöd22"]))

console.log(bookcase.searchBook("sdfjghskdjhg"))
