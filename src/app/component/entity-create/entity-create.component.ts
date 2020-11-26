import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ColumnType } from 'src/app/modell/columnType';
import { SystemTable } from 'src/app/modell/systemTable';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-entity-create',
  templateUrl: './entity-create.component.html',
  styleUrls: ['./entity-create.component.scss']
})
export class EntityCreateComponent implements OnInit {

  constructor(private location: Location,private formBuilder:FormBuilder,private backendService:BackendService,private route:ActivatedRoute) { }
  configData:SystemTable;
  form: FormGroup;
  notMapped:String[] =[];
  ngOnInit(): void {
   this.refresh()
  }
  parseJson(str){
    return JSON.parse(str)
  }
  refresh(){
    this.form = this.formBuilder.group({})
    this.backendService.get(this.route.snapshot.params.id).subscribe(data=>{
      this.configData= data;
      data.columns.forEach(col => {

        if(col.columnType.valueOf().toString()==ColumnType[ColumnType.String].toString()){
          this.form.addControl(col.hiddenName,new FormControl('',Validators.required))
        } else if(col.columnType.valueOf().toString()==ColumnType[ColumnType.Password].toString()){
          this.form.addControl(col.hiddenName,new FormControl('',Validators.required))
        }else if(col.columnType.valueOf().toString()==ColumnType[ColumnType.DateTime].toString()){
          this.form.addControl(col.hiddenName,new FormControl('',Validators.required))
        }
        else if(col.columnType.valueOf().toString()==ColumnType[ColumnType.Section].toString()){
         
        }   else if(col.columnType.valueOf().toString()==ColumnType[ColumnType.Select].toString()){
          this.form.addControl(col.hiddenName,new FormControl('',Validators.required))

        }  else if(col.columnType.valueOf().toString()==ColumnType[ColumnType.Number].toString()){
          this.form.addControl(col.hiddenName,new FormControl('',Validators.required))

        }else{
          this.notMapped.push(col.name+" - "+col.hiddenName +" - "+col.columnType)
        }
      });

      this.backendService.getGenericById( this.route.snapshot.params.id,this.route.snapshot.params.id2).subscribe(entity=>{
        this.form.patchValue(entity)
      })
    })
 
  }
  isSavedId = null;
  save(){
    if( this.route.snapshot.params.id2 && this.route.snapshot.params.id2 != "new"){
      this.form.value["_id"] = this.route.snapshot.params.id2 

    }if(this.isSavedId != null){
      this.form.value["_id"] = this.isSavedId
    }
    this.backendService.saveGeneric(this.route.snapshot.params.id,this.form.value) .subscribe((data)=>{
      console.log("User is logged in",data);
      this.isSavedId= data._id
      this.location.replaceState(this.route.snapshot.params.id+"/"+data._id);
      
    },(error)=>{
      console.log("User is not logged in",error.error);
   
    
    })
  }

}
