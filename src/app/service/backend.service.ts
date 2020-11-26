import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication-service.service';
import {SystemTable} from"../modell/systemTable"
import {PaginationResult} from"../modell/paginationResult"

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient,private authenticateService:AuthenticationService) {

  }

  get(tableId:string):Observable<SystemTable>{
    return this.http.get<SystemTable>(`${environment.apiBaseUrl}/table/${tableId}`);

  }
  saveTable(table:SystemTable): Observable<any>{
    
    return this.http.post<SystemTable>(`${environment.apiBaseUrl}/table`,table).pipe(map(table=>{
     
      return table;
    }));
  }

  getAll(page:number,pageSize:number):Observable<PaginationResult<SystemTable>> {
    
    return this.http.get<PaginationResult<SystemTable>>(`${environment.apiBaseUrl}/table?page=${page}&pageSize=${pageSize}`);
  }

  getTablesbyParentId(page:number,pageSize:number,parentId:string):Observable<PaginationResult<SystemTable>> {
    
    return this.http.get<PaginationResult<SystemTable>>(`${environment.apiBaseUrl}/table/user?page=${page}&pageSize=${pageSize}&parentId=${parentId}`);

  }
 
  getGeneric(entity:string,page:number,pageSize:number):Observable<any>{
    return this.http.get<any>(`${environment.apiBaseUrl}/entity/${entity}?page=${page}&pageSize=${pageSize}`).pipe(map(table=>{
     
      return table;
    }));
  }
  getGenericById(entity:string,id:string):Observable<any>{
    return this.http.get<any>(`${environment.apiBaseUrl}/entity/${entity}/${id}`).pipe(map(table=>{
     
      return table;
    }));
  }

  saveGeneric(entity:string,value:any):Observable<any>{
    return this.http.post<any>(`${environment.apiBaseUrl}/entity/${entity}`,value).pipe(map(table=>{
     
      return table;
    }));
  }
}
