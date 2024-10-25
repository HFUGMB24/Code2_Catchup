const authorsDatabase: string[] = [
  "Douglas Adams",
  "Alexander Scheurer",
  "Stephen King"
]

class Book {
  public title: string;
  public pages: number;
  public authors: string[];
  public chapters: string[]
  public constructor(_title: string, _authors: string[], _pages: number, _chapters: string[]) {
    this.title = _title
    this.pages = _pages
    this.authors = _authors
    this.chapters = _chapters
  }
}

const book1: Book = new Book("Hitchhiker", [authorsDatabase[0]], 1287, ["K1", "K2"])
const book2: Book = new Book("It", [authorsDatabase[2]], 123, ["It1", "It2"])

class Bookcase {
  public room: string
  public books: Book[]
  public constructor(_room: string, _books: Book[]) {
    this.room = _room
    this.books = _books
  }

  public addBook(_newBook: Book): void {
    this.books.push(_newBook)
  }

  public searchBook(_title: string): Book | undefined {
    for (const book of this.books) {
      if (book.title == _title) {
        return book
      }
    }
    return
  }
}

const bookcase: Bookcase = new Bookcase("Shower", [book1, book2])

bookcase.addBook(new Book("Doofe Thesis", [authorsDatabase[1]], 123, ["Blöd1", "Blöd22"]))

console.log(bookcase.searchBook("It"))
