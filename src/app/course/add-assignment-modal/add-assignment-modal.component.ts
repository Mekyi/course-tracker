import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-assignment-modal',
  templateUrl: './add-assignment-modal.component.html',
  styleUrls: ['./add-assignment-modal.component.scss']
})
export class AddAssignmentModalComponent implements OnInit {

  date = new FormControl(new Date());
  newAssignment: Object = {};
  states = [{value: 'armed'}, {value: 'disarmed'}];

  constructor(public dialogRef: MatDialogRef<AddAssignmentModalComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  convertDate(date) {
    return(new FormControl(new Date(date)).value);
  }

}
