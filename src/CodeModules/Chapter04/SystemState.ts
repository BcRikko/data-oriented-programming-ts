import { LibraryData } from "../../DataModels"
import * as SystemValidity from "./SystemValidity"

export type SystemState = LibraryData

let singletonState: SystemState = {
  address: '',
  name: '',
  catalog: {
    authorsByID: {},
    booksByISBN: {},
  },
  userManagement: {
    librariansByEmail: {},
    membersByEmail: {},
  }
}
let previousSystemState: SystemState = {
  address: '',
  name: '',
  catalog: {
    authorsByID: {},
    booksByISBN: {},
  },
  userManagement: {
    librariansByEmail: {},
    membersByEmail: {},
  }
}

export function get(): SystemState {
  return singletonState
}

export function commit(previous: SystemState, next: SystemState): void {
  const systemDataBeforeUpdate = singletonState

  if (SystemValidity.validate(previous, next) === false) {
    throw new Error('The system data to be committed is node valid!')
  }

  singletonState = next
  previousSystemState = systemDataBeforeUpdate
}

export function undoLastMutation() {
  singletonState = previousSystemState
}