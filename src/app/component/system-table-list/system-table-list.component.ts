import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication-service.service';
import { BackendService } from 'src/app/service/backend.service';
import { SystemTable } from 'src/app/modell/systemTable';
import { MatTableDataSource } from '@angular/material/table';
import { PaginationResult } from 'src/app/modell/paginationResult';

@Component({
  selector: 'app-system-table-list',
  templateUrl: './system-table-list.component.html',
  styleUrls: ['./system-table-list.component.scss']
})
export class SystemTableListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource([]);
  systemTables:SystemTable[];
  page:number=0;
  pageSize:number=25;
  totalCount:number = 0;
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthenticationService,
     private route: ActivatedRoute,private backendService:BackendService) {
  }
  ngOnInit(): void {
 this.refreshList();
  }

  refreshList(){
    this.backendService.getAll(this.page,this.pageSize) .subscribe((data:PaginationResult<SystemTable>)=>{
      console.log("User is logged in",data);
      this.page = data.currentpage;
      this.pageSize=data.pageSize;
      this.totalCount = data.totalCount;
      this.systemTables = data.results;
      this.dataSource = new MatTableDataSource(data.results);

      },(error)=>{
      console.log("User is not logged in",error.error);
    })
  }

  pageChange(event){
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    console.log(event)
    this.refreshList();
  }

  open(row=undefined){
    if(!row){
      this.router.navigateByUrl(  'system-table-new');

    }else{
      this.router.navigateByUrl(  'system-table/'+row?.id);

    }
  }

}
