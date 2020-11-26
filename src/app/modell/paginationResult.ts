export class PaginationResult<T> {
    totalCount:number
    pageCount:number
    currentpage:number
    pageSize:number
    results:T[]
}