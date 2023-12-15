import { LibrarianData } from "./LibrarianData"
import { MemberData } from "./MemberData"

export type Email = string
export type UserManagementData = {
  librariansByEmail: Record<Email, LibrarianData>
  membersByEmail: Record<Email, MemberData>
}