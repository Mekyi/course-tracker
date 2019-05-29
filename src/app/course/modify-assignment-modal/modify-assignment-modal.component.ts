import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssignmentItem } from '../../templates/template';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modify-assignment-modal',
  templateUrl: './modify-assignment-modal.component.html',
  styleUrls: ['./modify-assignment-modal.component.scss']
})
export class ModifyAssignmentModalComponent implements OnInit {

  // Create empty assignment object to prevent data binding
  modifiedAssignment: AssignmentItem = {
    assignment_id: 0,
    name: '',
    desc: '',
    created_date: '',
    due_date: '',
    state: '',
    course_id_FK: 0
  };

  constructor(public dialogRef: MatDialogRef<ModifyAssignmentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AssignmentItem) { }

  ngOnInit() {
    // Assign properties to modifiable object
    this.modifiedAssignment.assignment_id = this.data.assignment_id;
    this.modifiedAssignment.name = this.data.name;
    this.modifiedAssignment.desc = this.data.desc;
    this.modifiedAssignment.created_date = this.data.created_date;
    this.modifiedAssignment.due_date = this.data.due_date;
    this.modifiedAssignment.state = this.data.state;
    this.modifiedAssignment.course_id_FK = this.data.course_id_FK;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  convertDate(date) {
    return(new FormControl(new Date(date)).value);
  }

}
