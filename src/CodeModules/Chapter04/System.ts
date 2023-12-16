import * as SystemState from './SystemState'
import * as Library from './Library'
import { MemberData } from "../../DataModels";

export function addMember(member: MemberData) {
  const prev = SystemState.get()
  const next = Library.addMember(prev, member)

  SystemState.commit(prev, next)
}