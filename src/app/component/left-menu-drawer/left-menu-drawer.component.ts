import { Component, OnInit } from '@angular/core';
import { PaginationResult } from 'src/app/modell/paginationResult';
import { SystemTable } from 'src/app/modell/systemTable';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-left-menu-drawer',
  templateUrl: './left-menu-drawer.component.html',
  styleUrls: ['./left-menu-drawer.component.scss']
})
export class LeftMenuDrawerComponent implements OnInit {

  constructor(private backendService:BackendService) { }
  page:number=0;
  pageSize:number=100;
  totalCount:number;
  systemTables:SystemTable[];
  ngOnInit(): void {
    
    this.backendService.getTablesbyParentId(0,100,null).subscribe((data:PaginationResult<SystemTable>)=>{
      console.log("User is logged in",data);
      this.page = data.currentpage;
      this.pageSize=data.pageSize;
      this.totalCount = data.totalCount;
      this.systemTables = data.results;

      },(error)=>{
      console.log("User is not logged in",error.error);
    })

  }

}
