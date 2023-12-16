import { AuthorData, BookData, ISBN } from "."

export type BookInfo = {
  title: BookData["title"]
  isbn: ISBN
  authorNames: AuthorData["name"][]
}