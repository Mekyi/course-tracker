import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CourseItem, AssignmentItem } from '../../templates/template';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modify-assignment-modal',
  templateUrl: './modify-assignment-modal.component.html',
  styleUrls: ['./modify-assignment-modal.component.scss']
})
export class ModifyAssignmentModalComponent implements OnInit {

  assignment: AssignmentItem;
  states = [{value: 'armed'}, {value: 'disarmed'}];

  constructor(public dialogRef: MatDialogRef<ModifyAssignmentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AssignmentItem) { }

  ngOnInit() {
    this.assignment = this.data;
    console.log(this.assignment);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  convertDate(date) {
    return(new FormControl(new Date(date)).value);
  }

}
