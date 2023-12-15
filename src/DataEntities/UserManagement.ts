import { Librarian } from "./Librarian"
import { Member } from "./Member"

export type Email = string
export type UserManagement = {
  librariansByEmail: Record<Email, Librarian>
  membersByEmail: Record<Email, Member>
}