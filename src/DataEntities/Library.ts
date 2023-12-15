import { Catalog } from "./Catalog"
import { UserManagement } from "./UserManagement"

export type Library = {
  name: string
  address: string
  catalog: Catalog
  userManagement: UserManagement
}