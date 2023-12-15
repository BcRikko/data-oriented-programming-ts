import { BookData, BookItemData, BookItemID, BookLendingData, LibraryData, MemberID, UserID } from "../../DataEntities";
import * as UserManagement from "./UserManagement";
import * as Catalog from "./Catalog";

export function searchBook(libraryData: LibraryData, searchQuery: unknown): BookData {
  // TODO:
  return {} as BookData
}

export function addBookItem(libraryData: LibraryData, userID: UserID, bookItemInfo: BookItemData) {
  if (
    UserManagement.isLibrarian(libraryData.userManagement, userID) ||
    UserManagement.isVIPMember(libraryData.userManagement, userID)
  ) {
    return Catalog.addBookItem(libraryData.catalog, bookItemInfo)
  }

  throw "Not allowed to add book lendings"
}

export function blockMember(libraryData: LibraryData, memberID: MemberID): void {
  // TODO:
}

export function unblockMember(libraryData: LibraryData, memberID: MemberID): void {
  // TODO:
}

export function login(libraryData: LibraryData, loginInfo: unknown): void {
  // TODO:
}

export function getBookLendings(libraryData: LibraryData, userID: UserID, memberID: MemberID): BookLendingData {
  if (
    UserManagement.isLibrarian(libraryData.userManagement, userID) ||
    UserManagement.isVIPMember(libraryData.userManagement, userID)
  ) {
    return Catalog.getBookLendings(libraryData.catalog, memberID)
  }

  throw "Not allowed to get book lendings"
}

export function checkoutBook(librarianData: LibraryData, userID: UserID, bookItemID: BookItemID): BookData {
  // TODO:
  return {} as BookData
}

export function returnBook(librarianData: LibraryData, userID: UserID, bookItemID: BookItemID): void {
  // TODO:
}
