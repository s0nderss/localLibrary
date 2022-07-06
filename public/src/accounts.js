function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) => nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0
  books.forEach(book => book.borrows.forEach(borrower => account.id === borrower.id ? totalBorrows++ : null))
  return totalBorrows
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = []
  books.forEach((book) => {
    let bookBorrows = book.borrows
    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned){
        borrowedBooks.push(book)
      }
    })
  })
  let result = borrowedBooks.map((book) => {
    return {...book, author: _getAuthor(book, authors)}
  })
  return result
}

function _getAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
