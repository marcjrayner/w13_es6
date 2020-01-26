class Library {

  constructor(books = []) {
    this.books = books;
  }

  bookCount() {
    return this.books.length
  }

  addBook(newBook) {
    this.books.push(newBook)
  }

  addBooks(newBooks) {
    newBooks.forEach(book => this.books.push(book))
  }


  printInventory() {
    this.books.forEach(({title, author}) => {
      console.log(`${title} by ${author}`);
    });
}

//   printInventory(({title, author}) {
//     this.books.forEach((book) => {
//       console.log(`${title} by ${author}`);
//     });
//   };
};
//
//
//
// Library.prototype.printInventory = function () {
//   this.books.forEach((book) => {
//     console.log(`${book.title} by ${book.author}`);
//   });
// };

export default Library;
