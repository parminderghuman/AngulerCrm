import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SelectItem } from 'primeng/api';
import { PaginationResult } from 'src/app/modell/paginationResult';
import { SystemTable } from 'src/app/modell/systemTable';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-system-table-column',
  templateUrl: './system-table-column.component.html',
  styleUrls: ['./system-table-column.component.scss']
})
export class SystemTableColumnComponent implements OnInit {

  @Output() removeColumn = new EventEmitter<number>();
  @Input() systemTables:[];
  public columnForm;
  types: SelectItem[]
  statuses = [
  { label: 'Draft', value: "Draft" },
  { label: 'Live', value: "Live" },]

  constructor(public controlContainer: ControlContainer, private backendService:BackendService) {
    

  }
  
  delete(){
    const index:number= +this.controlContainer.name
      this.removeColumn.next(index)
  }
  ngOnInit(): void {
    
    this.columnForm = this.controlContainer.control;
    this.types = [
      { label: 'String', value: "String" },
      { label: 'Text', value: "Text" },
      { label: 'Number', value: "Number" },
      { label: 'Password', value: "Password" },
      { label: 'MultiSelect', value: "MultiSelect" },
      { label: 'Select', value: "Select" },
      { label: 'Boolean', value: "Boolean" },
      { label: 'Refrence', value: "Refrence" },
      { label: 'Address', value: "Address" },
      { label: 'MultiRefrence', value: "MultiRefrence" },
      { label: 'Date', value: "Date" },
      { label: 'Time', value: "Time" },
      { label: 'DateTime', value: "DateTime" },
      { label: 'File', value: "File" },
      { label: 'Section', value: "Section" },
    ]
  }

}
