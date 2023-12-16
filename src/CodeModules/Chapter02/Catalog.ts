import { BookData, BookItemData, BookLendingData, CatalogData, MemberID } from "../../DataModels"


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