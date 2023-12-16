import { ISBN } from "./BookData"

export type AuthorID = string
export type AuthorData = {
  name: string
  bookISBNs: ISBN[]
}