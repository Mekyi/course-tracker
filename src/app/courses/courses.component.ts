import { Component, OnInit } from '@angular/core';
import { BaseCommService } from '../services/base-comm.service'
import { DataService } from '../services/data.service';
import { CourseItem } from '../templates/template';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
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
    this.getCourses();
  }

  getCourses() {
    this.dataService.getCourses().subscribe(response => {
      this.courses = response;
    });
  }

  onSelect(id: number) {
    console.log('onSelect: ' + id);
    this.router.navigate(['/course/' + id]);
  }

  // Format date to user friendly format
  formatDate(date) {
    let fDate: any = new Date(date);
    fDate = `${fDate.getDate()}.${fDate.getMonth() + 1}.${fDate.getFullYear()}`;
    return fDate;
  }

  // Create new course
  createCourse(data) {
    const newCourse: CourseItem = {
      // Fill course properties
      name: data.name,
      // Convert date format to ISO string and remove time
      start_date: data.start_date.toISOString().split('T')[0],
      end_date: data.end_date.toISOString().split('T')[0]
    };

    // Send course to data service
    this.dataService.addCourse({course: newCourse}).subscribe(result =>
      console.log(result)
    );

    // Refresh updated courses from back-end
    setTimeout(() => {
      this.getCourses();
    }, 1000);
  }

  // Update existing course
  updateCourse(data: CourseItem, index: number): void {
    this.courses[index].name = data.name;

    // Ensure that dates are in right format
    this.courses[index].start_date = new Date(data.start_date).toISOString().split('T')[0];
    this.courses[index].end_date = new Date(data.end_date).toISOString().split('T')[0];

    // Send course to data service
    this.dataService.updateCourse({course: this.courses[index]}).subscribe(result =>
      console.log(result)
    );

    // Refresh updated courses from back-end
    setTimeout(() => {
      this.getCourses();
    }, 1000);
  }

  // Delete course and its assignments
  deleteCourse(index) {
    // Send delete request to back-end
    this.dataService.deleteAssignment(this.courses[index]['course_id']).subscribe(result =>
      console.log(result)
    );
    // Delete locally
    this.courses.splice(index, 1);
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
    console.log(this.courses);
    const dialogRef = this.dialog.open(ModifyCourseModalComponent, {
      width: '800px',
      // Data to inject into modal
      data: this.courses[index]
    });

    // Save changes back to assignment
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.updateCourse(result, index);
      }
    });
  }
}
