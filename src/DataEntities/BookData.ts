import { AuthorID } from "./AuthorData"
import { BookItemData } from "./BookItemData"

export type ISBN = string

export type BookData = {
  isbn: ISBN
  title: string
  publicationYear: number
  authorIDs: AuthorID[]
  bookItems: BookItemData[]
}