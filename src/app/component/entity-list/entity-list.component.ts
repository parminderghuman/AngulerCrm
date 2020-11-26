import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemTable } from 'src/app/modell/systemTable';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {

  constructor(private router:Router,private formBuilder:FormBuilder,private backendService:BackendService,private route:ActivatedRoute) { }
   primaryDisplay ={};
   secondaryDisplay={};
   data:any[];
   displayedColumns: string[] = ['id', 'name'];
   page:number=0;
   pageSize:number=12;
   totalCount:number = 0;
   systemTable:SystemTable;
  ngOnInit(): void {
    this.backendService.get(this.route.snapshot.params.id).subscribe(data=>{
      console.log(data);
     
      data.columns.forEach(element => {
        if(element.name == data.primaryDisplay){
         this. primaryDisplay ={name:data.primaryDisplay,value: element.hiddenName};
        }else if(element.name == data.secondaryDisplay){
         this. secondaryDisplay = {name:data.secondaryDisplay, value:element.hiddenName};
        }
      });
   this.refreshList();

  });
  }

  refreshList(){
    this.backendService.getGeneric(this.route.snapshot.params.id,this.page,this.pageSize).subscribe(result=>{
      this.page = result.currentpage;
      this.pageSize=result.pageSize;
      this.totalCount = result.totalCount;
      this.data = result.results;
          });
  }
  open(row=undefined){
    if(!row){
      this.router.navigateByUrl(  this.route.snapshot.params.id+'/new');


    }else{
      this.router.navigateByUrl(  this.route.snapshot.params.id+'/'+row?._id);

    }
  }

  
  pageChange(event){
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    console.log(event)
    this.refreshList();
  }
}
