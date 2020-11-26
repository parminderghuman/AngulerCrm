import { Status } from "./Status"
import { ColumnType } from "./columnType"

export class SystemColumn{
    hiddenName:string

    name:string
    columnType: ColumnType
    defaultValue:string
    maxValue:number
    minValue: number
    validationRegex:string
    validateFunction: string
    isRequired: boolean
    columnStatus: Status
    maxLength: number
    minLenght: number
    regexMatch: string
    errorMessage: string
    isNull:boolean
    options:{}
    targetClass:string
    isSaveInTable:boolean
    isCreateInLine:boolean
} 