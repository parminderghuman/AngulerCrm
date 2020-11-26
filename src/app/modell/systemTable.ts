import { Status } from "./Status"
import { SystemColumn } from "./systemColumn"
import { Constraint } from "./constraint"
export class SystemTable {
      id:string
      name:string
      tableName: string
      tableStatus:Status
      beforeSaveFunction:string
      primaryDisplay:string
      secondaryDisplay:string
      displayColumns:string[]
      columns: SystemColumn[]
      constraints : Constraint[]
      parentTable:string
      matIcon:string
}
