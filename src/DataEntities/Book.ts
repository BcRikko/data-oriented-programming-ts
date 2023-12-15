import { AuthorID } from "./Author"
import { BookItem } from "./BookItem"

export type ISBN = string

export type Book = {
  isbn: ISBN
  title: string
  publicationYear: number
  authorIDs: AuthorID[]
  bookItems: BookItem[]
}