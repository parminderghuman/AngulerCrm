import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication-service.service';
import { SelectItem } from 'primeng/api';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {BackendService} from "../../service/backend.service"
import { Status } from 'src/app/modell/Status';
import { ConstarintType } from 'src/app/modell/constraintType';
import { ColumnType } from 'src/app/modell/columnType';
import { SystemTable } from 'src/app/modell/systemTable';
import {Location} from '@angular/common'; 
import { PaginationResult } from 'src/app/modell/paginationResult';

@Component({
  selector: 'app-system-table',
  templateUrl: './system-table.component.html',
  styleUrls: ['./system-table.component.scss',
  ]
})
export class SystemTableComponent implements OnInit {
  form: FormGroup;
  statuses: SelectItem[];
  types: SelectItem[]
  displayedColumns: string[] = ['id', 'name'];
  systemTables:SystemTable[];
  page:number=0;
  pageSize:number=100;
  totalCount:number = 0;
  constructor(private location: Location,private router: Router, private fb: FormBuilder, private authService: AuthenticationService, private route: ActivatedRoute,private backendService:BackendService) {
    this.form = fb.group({
      id:[null],
      name: [null, Validators.required],
      tableName:[null , Validators.required],
      tableStatus: [],
      beforeSaveFunction: [],
      primaryDisplay:[],
      parentTable:[],
      secondaryDisplay:[],
      displayColumns:[],
      columns: fb.array([this.createColumn()]),
      constraints :  fb.array([this.createConstraint()]),
      matIcon:[]
    });

    this.statuses = [
    { label: 'Draft', value: "Draft" },
    { label: 'Live', value: "Live" },]
  };
  ngOnInit(): void {
    
    this.refreshList();
    this.refresh();
  }
  refreshList(){
    this.backendService.getAll(this.page,this.pageSize) .subscribe((data:PaginationResult<SystemTable>)=>{
      console.log("User is logged in",data);
      this.page = data.currentpage;
      this.pageSize=data.pageSize;
      this.totalCount = data.totalCount;
      this.systemTables = data.results;

      },(error)=>{
      console.log("User is not logged in",error.error);
    })
  }
  save():void{
    console.log("value",this.form.value)
    this.backendService.saveTable(this.form.value) .subscribe((data)=>{
      console.log("User is logged in",data);
      this.refresh();
      this.location.replaceState("/system-table/"+data.id);

     
    },(error)=>{
      console.log("User is not logged in",error.error);
   
    
    })
  }

  cancel():void{
    this.router.navigateByUrl(  'system-table');

  }
  refresh():void{
    var tableId = this.route.snapshot.params.id;
    
    if(tableId){
      this.backendService.get(tableId).subscribe(data=>{
        this.form.patchValue(data);
        (this.form.get("columns") as FormArray).clear();
        data.columns.forEach(column => {
          let columnFB:FormGroup = this.createColumn();
          columnFB.patchValue(column); 
          (this.form.get("columns") as FormArray).push(columnFB)
        });
        (this.form.get("constraints") as FormArray).clear();
        data.constraints.forEach(column => {
          let columnFB:FormGroup = this.createConstraint();
          columnFB.patchValue(column); 
          (this.form.get("constraints") as FormArray).push(columnFB)
        });
      },
      error=>{

      })

    }
  }
  get columns(): FormArray {
    return this.form.get("columns") as FormArray

  }

  get constraints(): FormArray {
    return this.form.get("constraints") as FormArray

  }

  addConstraint():void{
    let control = <FormArray>this.form.controls.constraints;
    control.push(this.createConstraint());

  }

  createConstraint():FormGroup{
    return this.fb.group({
      name:[null,Validators.required],
      constraintType:[ConstarintType.Unique,Validators.required],
      columns: [[],Validators.required]
    })
  }
  deleteColumn(index:number):void{
    //alert("p");
    const formArray:FormArray =  this.form.get("columns") as FormArray;
    formArray.removeAt(index);
  }

  deleteConstraint(index:number):void{
    //alert("p");
    const formArray:FormArray =  this.form.get("constraints") as FormArray;
    formArray.removeAt(index);
  }
  createColumn():FormGroup {
    return this.fb.group({
      hiddenName: [null],
      name: ["New", Validators.required],
      columnType: [ColumnType.Text+"", Validators.required],
      defaultValue: [null],
      maxValue: [0],
      minValue: [0],
      validationRegex: [null],
      validateFunction: [null],
      isRequired: [false],
      columnStatus: [Status.Draft],
      maxLength: [255],
      minLenght: [0],
      regexMatch: [null],
      errorMessage: [null],
      isNull:[false],
      options:[null],
      targetClass:[null],
      isSaveInTable:[null],
    isCreateInLine:[null]

    });
  }

  addColumn():void {

    let control = <FormArray>this.form.controls.columns;
    control.push(this.createColumn());

  }

  drop(event: CdkDragDrop<Form[]>) {
   const formArray:FormArray =  this.form.get("columns") as FormArray;
    const fromIndex:number= event.previousIndex ;
    const toIndex:number= event.currentIndex ;
    const dir:number = toIndex > fromIndex ? 1 : -1;

    const item = formArray.at(fromIndex);
    for (let i = fromIndex; i * dir < toIndex * dir; i = i + dir) {
      const current = formArray.at(i + dir);
      formArray.setControl(i, current);
    }
    formArray.setControl(toIndex, item);
  //  moveItemInArray(this.form.get("columns") as Form[], event.previousIndex, event.currentIndex);
  }

 
}
