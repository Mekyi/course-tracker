import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CourseItem } from '../../templates/template';

@Component({
  selector: 'app-add-course-modal',
  templateUrl: './add-course-modal.component.html',
  styleUrls: ['./add-course-modal.component.scss']
})
export class AddCourseModalComponent implements OnInit {

  newCourse: CourseItem = {
    name: '',
    start_date: '',
    end_date: ''
  };

  constructor(public dialogRef: MatDialogRef<AddCourseModalComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
