import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CourseItem, AssignmentItem } from '../templates/template';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModifyAssignmentModalComponent } from './modify-assignment-modal/modify-assignment-modal.component';
import { AddAssignmentModalComponent } from './add-assignment-modal/add-assignment-modal.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  date = new Date();
  courseId: number;
  courseItem: CourseItem;
  assignments: AssignmentItem[];

  constructor(protected dataService: DataService, public dialog: MatDialog,
          protected route: ActivatedRoute) {
    this.courseId = Number(route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    // Get course and assignment items via data service
    this.courseItem = this.dataService.getCourse(this.courseId);
    this.assignments = this.dataService.getCourseAssignment(this.courseId);
  }

  // Format date for calendar component
  convertDate(date) {
    return(new FormControl(new Date(date)).value);
  }

  createAssignment(data) {
    // Create assignment from template
    const newAssignment: AssignmentItem = {
      // Fill assignment properties
      assignment_id: this.dataService.genAssignmentId(this.courseId),
      name: data.name,
      desc: data.desc,
      state: data.state,
      // Convert date format to ISO string and remove time
      created_date: new Date(this.date).toISOString().split('T')[0],
      due_date: new Date(data.due_date).toISOString().split('T')[0],
      course_id_FK: this.courseId
    };

    // Send assignment to data service
    this.dataService.addAssignment(newAssignment);

     // Update assignments from data service
    this.assignments = this.dataService.getCourseAssignment(this.courseId);
  }

  // Update existing assignment
  updateAssignment(data: AssignmentItem): void {
    // Ensure that date is in right format
    data.due_date = new Date(data.due_date).toISOString().split('T')[0];

    // Send asignment to data service
    this.dataService.updateAssignment(data);
    console.log(data);

    // Update assignments from data service
    this.assignments = this.dataService.getCourseAssignment(this.courseId);
  }


  // Open modal for creating assignment
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddAssignmentModalComponent, {
      width: '800px'
    });

    // Create new assignment from result
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createAssignment(result);
      }
    });
  }

  // Open modal for modifying assignment
  openModifyDialog(index): void {
    const dialogRef = this.dialog.open(ModifyAssignmentModalComponent, {
      width: '800px',
      // Data to inject into modal
      data: this.assignments[index]
    });

    // Save changes back to assignment
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateAssignment(result);
      }
    });
  }
}
