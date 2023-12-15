import { Email } from "./UserManagement"

export type Member = {
  email: Email
  encryptedPassword: string
  isBlocked: boolean
}