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

  toString(): string {
    return "book: { title: " + this.title + ", authors: " + this.authors + ", " + this.pages + " }"
  }
}

class EditedBook extends Book {
  editors: string[]
  constructor(_title: string, _editors: string[], _pages: number, _chapters: string[]) {
    super(_title, [], _pages, _chapters)
    this.editors = _editors
  }

  toString(): string {
    return "book: { title: " + this.title + ", editors: " + this.editors + ", " + this.pages + " }"
  }
}
let ebook: EditedBook = new EditedBook("Collection of Thing", [authorsDatabase[0], authorsDatabase[2]], 1234, [])

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

  searchBook(_title: string): Book[] {
    const foundBooks: Book[] = []

    for (const book of this.books) {
      if (book.title.toLowerCase().includes(_title.toLowerCase())) {
        foundBooks.push(book)
      }
    }
    return foundBooks
  }
}

let bookcase: Bookcase = new Bookcase("Shower", [book1, book2])

bookcase.addBook(new Book("Doofe Thesis", [authorsDatabase[1]], 123, ["Blöd1", "Blöd22"]))
bookcase.addBook(ebook)

console.log(bookcase.searchBook("It"))

const searchButton: HTMLButtonElement = document.querySelector("button#searchbutton")!
searchButton.addEventListener("click", mouseClick)

function mouseClick() {

  const searchTextInput: HTMLInputElement = document.querySelector("input#searchtext")!
  const searchResultDiv: HTMLDivElement = document.querySelector("div#searchresult")!

  searchResultDiv.innerHTML = ""

  const foundBooks: Book[] = bookcase.searchBook(searchTextInput.value)!;

  for (const foundBook of foundBooks) {
    console.log(foundBook)

    searchResultDiv.innerHTML += "<div>" + foundBook + "</div>"
  }
}