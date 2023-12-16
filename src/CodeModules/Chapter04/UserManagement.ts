import * as _ from "lodash"
import { produce } from "immer"
import { UserManagementData, MemberID, Email, MemberData } from "../../DataModels";

export function isLibrarian(userManagementData: UserManagementData, email: Email): boolean {
  return _.has(_.get(userManagementData, "librariansByEmail"), email)
}

export function isVIPMember(userManagementData: UserManagementData, email: Email): boolean {
  return _.get(userManagementData, ["membersByEmail", email, "isVIP"]) === true
}

export function isSuperMember(userManagementData: UserManagementData, email: Email): boolean {
  return _.get(userManagementData, ["membersByEmail", email, "isSuper"]) === true
}

export function blockMember(userManagementData: UserManagementData, memberID: MemberID): void {
  // TODO:
}

export function unblockMember(userManagementData: UserManagementData, memberID: MemberID): void {
  // TODO:
}

export function login(userManagementData: UserManagementData, loginInfo: unknown): void {
  // TODO:
}

export function addMember(userManagementData: UserManagementData, member: MemberData): UserManagementData {
  const email = _.get(member, "email")
  const infoPath = ["membersByEmail", email]

  if (_.has(userManagementData, infoPath)) {
    throw new Error(`Member ${email} already exists`)
  }

  const nextUserManagementData = produce(
    userManagementData,
    draft => _.set(draft, infoPath, member)
  )

  return nextUserManagementData
}
