function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const outBooks = books.filter(book => book.borrows.some(trans => !trans.returned))
  const inBooks = books.filter(book => book.borrows.every(trans => trans.returned))
  const allBookStatus = [outBooks, inBooks]
  return allBookStatus
}

function getBorrowersForBook(book, accounts) {
  const borrowsForBook = book.borrows.map((txn) => {
    const acct = accounts.find((account) => account.id === txn.id)
    const newTrans = {...txn, ...acct}
    return newTrans
  })
  borrowsForBook.splice(10)
  return borrowsForBook
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
