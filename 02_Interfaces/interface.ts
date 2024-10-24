
interface Book {
  title: string;
  pages: number;
  authors: string[];
}

let authorsDatabase: string[] = []
authorsDatabase.push("Douglas Adams")
authorsDatabase.push("Alexander Scheurer")
authorsDatabase.push("Stephen King")

let tempAuthors: string[] = []
tempAuthors.push(authorsDatabase[0])

let book1: Book = {
  title: "Hitchhiker",
  pages: 1287,
  authors: tempAuthors
}

console.log(book1)
