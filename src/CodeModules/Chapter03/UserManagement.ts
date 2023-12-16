import * as _ from "lodash"
import { UserManagementData, MemberID, Email } from "../../DataModels";

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