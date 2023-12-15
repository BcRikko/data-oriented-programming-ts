import { AuthorData, AuthorID } from "./AuthorData"
import { BookData, ISBN } from "./BookData"

export type CatalogData = {
  booksByISBN: Record<ISBN, BookData>
  authorsByID: Record<AuthorID, AuthorData>
}
