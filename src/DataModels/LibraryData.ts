import { CatalogData } from "./CatalogData"
import { UserManagementData } from "./UserManagementData"

export type LibraryData = {
  name: string
  address: string
  catalog: CatalogData
  userManagement: UserManagementData
}