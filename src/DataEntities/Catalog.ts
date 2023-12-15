import { Author, AuthorID } from "./Author"
import { Book, ISBN } from "./Book"

export type Catalog = {
  booksByISBN: Record<ISBN, Book>
  authorsByID: Record<AuthorID, Author>
}
