import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-system-table-constraint',
  templateUrl: './system-table-constraint.component.html',
  styleUrls: ['./system-table-constraint.component.scss']
})
export class SystemTableConstraintComponent implements OnInit {
  @Output() removeConstraint = new EventEmitter<number>();


  @Input() columns:[];
  public constraintForm;
  public constraintTypes =[
    { label: 'Unique', value: "Unique" },
    { label: 'primaryKey', value: "primaryKey" },]
  
  constructor(public controlContainer: ControlContainer) {
  }
  ngOnInit(): void {
    
    this.constraintForm = this.controlContainer.control;
  }
  delete(){
    const index:number= +this.controlContainer.name
      this.removeConstraint.next(index)
  }
}
