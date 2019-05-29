import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CourseItem, AssignmentItem } from '../templates/template';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ModifyCourseModalComponent } from './modify-course-modal/modify-course-modal.component';
import { AddCourseModalComponent } from './add-course-modal/add-course-modal.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: CourseItem[];

  constructor(protected dataService: DataService, protected router: Router,
          public dialog: MatDialog) { }

  ngOnInit() {
    this.courses = this.dataService.getCourses();
    console.log(this.courses);
  }

  onSelect(id: number) {
    console.log('onSelect: ' + id);
    this.router.navigate(['/course/' + id]);
  }

  // Create new course
  createCourse(data) {
    const newCourse: CourseItem = {
      // Fill course properties
      course_id: this.dataService.genCourseId(),
      name: data.name,
      // Convert date format to ISO string and remove time
      start_date: data.start_date.toISOString().split('T')[0],
      end_date: data.end_date.toISOString().split('T')[0]
    };

    // Send course to data service
    this.dataService.addCourse(newCourse);

    // Update courses from data service
    this.courses = this.dataService.getCourses();
  }

  // Update existing course
  updateCourse(data: CourseItem): void {
    // Ensure that dates are in right format
    data.start_date = new Date(data.start_date).toISOString().split('T')[0];
    data.end_date = new Date(data.end_date).toISOString().split('T')[0];

    // Send course to data service
    this.dataService.updateCourse(data);
    console.log(data);

    // Update courses from data service
    this.courses = this.dataService.getCourses();
  }

  // Open modal for creating course
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddCourseModalComponent, {
      width: '800px'
    });

    // Create new vourse from result
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.createCourse(result);
      }
    });
  }

  // Open modal for modifying course
  openModifyDialog(index): void {
    const dialogRef = this.dialog.open(ModifyCourseModalComponent, {
      width: '800px',
      // Data to inject into modal
      data: this.courses[index]
    });

    // Save changes back to assignment
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.updateCourse(result);
      }
    });
  }
}
