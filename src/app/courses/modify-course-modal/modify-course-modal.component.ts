import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CourseItem } from '../../templates/template';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modify-course-modal',
  templateUrl: './modify-course-modal.component.html',
  styleUrls: ['./modify-course-modal.component.scss']
})
export class ModifyCourseModalComponent implements OnInit {

  // Create empty course object to prevent data binding
  modifiedCourse: CourseItem = {
    name: '',
    start_date: '',
    end_date: ''
  };

  constructor(public dialogRef: MatDialogRef<ModifyCourseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CourseItem) { }

  ngOnInit() {
    // Assign properties to modifiable object
    this.modifiedCourse.name = this.data.name;
    this.modifiedCourse.start_date = this.data.start_date;
    this.modifiedCourse.end_date = this.data.end_date;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  convertDate(date) {
    return(new FormControl(new Date(date)).value);
  }


}
