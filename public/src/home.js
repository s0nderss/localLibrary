function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.reduce((counter, book) => {
    !book.borrows[0].returned ? counter++ : null;
    return counter
  }, 0)
}

function getMostCommonGenres(books) {
  const mostCommonGenres = books.reduce((genres, book) => {
    const genreObj = genres.find((currGenre) => currGenre.name === book.genre)
    !genreObj ? genres.push({
      name: book.genre,
      count: 1,
    }) : genreObj.count++
    return genres
  }, [])
  mostCommonGenres.sort((genA, genB) => genB.count - genA.count)
  mostCommonGenres.splice(5)

  return mostCommonGenres
}

function getMostPopularBooks(books) {
  const popBooks = books.map((book) => {return { name: book.title, count: book.borrows.length}})
  popBooks.sort((bookA, bookB) => bookB.count - bookA.count)
  popBooks.splice(5)

  return popBooks
}

function getMostPopularAuthors(books, authors) {
  const popAuth = authors.map((author) => {
    const authName = `${author.name.first} ${author.name.last}`
    const booksBy = books.filter((book) => book.authorId === author.id)
    const borrowed = booksBy.reduce((total, book) => total + book.borrows.length, 0)

    const authorInfo = {
      name: authName,
      count: borrowed,
    }
    return authorInfo
  })
  popAuth.sort((authA, authB) => authB.count - authA.count)
  popAuth.splice(5)

  return popAuth
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
