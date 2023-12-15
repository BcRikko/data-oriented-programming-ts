import { ISBN } from "./BookData"
import { BookItemID } from "./BookItemData"

export type BookLendingData = {
  bookItemId: BookItemID
  bookISBN: ISBN
  lendingDate: Date
}