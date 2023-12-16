import * as _ from 'lodash'
import { AuthorData, BookData, BookInfo, BookItemData, BookLendingData, CatalogData, LibraryData, MemberID } from "../../DataModels"


export function searchBook(catalogData: CatalogData, searchQuery: unknown): BookData {
  // TODO:
  return {} as BookData
}

export function addBookItem(catalogData: CatalogData, bookItemInfo: BookItemData): void {
  // TODO:
}

export function checkoutBook(catalogData: CatalogData, bookItemInfo: BookItemData): void {
  // TODO:
}

export function returnBook(catalogData: CatalogData, bookItemInfo: BookItemData): void {
  // TODO:
}

export function getBookLendings(catalogData: CatalogData, memberID: MemberID): BookLendingData {
  // TODO:
  return {} as BookLendingData
}

export function searchBooksByTitle(catalogData: CatalogData, query: string): BookInfo[] {
  const allBooks = _.values(_.get(catalogData, "booksByISBN"))
  const matchingBooks = _.filter(allBooks, (book) => _.get(book, "title").includes(query))

  const bookInfos = _.map(matchingBooks, book => bookInfo(catalogData, book))
  return bookInfos
}

function bookInfo(catalogData: CatalogData, book: BookData): BookInfo {
  const bookInfo = {
    title: _.get(book, "title"),
    isbn: _.get(book, "isbn"),
    authorNames: authorNames(catalogData, book)
  }
  return bookInfo
}

function authorNames(catalogData: CatalogData, book: BookData): AuthorData["name"][] {
  const authorIDs = _.get(book, "authorIDs")
  const names = _.map(authorIDs, authorID => _.get(catalogData, ["authorsByID", authorID, "name"]))

  return names
}