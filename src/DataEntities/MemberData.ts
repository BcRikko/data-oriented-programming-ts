import { Email } from "./UserManagementData"

export type MemberID = Email
export type MemberData = {
  email: Email
  encryptedPassword: string
  isBlocked: boolean
}