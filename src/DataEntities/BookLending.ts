import { ISBN } from "./Book"
import { BookItemID } from "./BookItem"

export type BookLending = {
  bookItemId: BookItemID
  bookISBN: ISBN
  lendingDate: Date
}