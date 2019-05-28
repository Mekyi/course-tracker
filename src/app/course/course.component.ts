import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CourseItem, AssignmentItem } from '../templates/template';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModifyAssignmentModalComponent } from './modify-assignment-modal/modify-assignment-modal.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courseId: number;
  courseItem: CourseItem;
  assignments: AssignmentItem[];

  constructor(protected dataService: DataService, public dialog: MatDialog, protected route: ActivatedRoute) {
    this.courseId = Number(route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.courseItem = this.dataService.getCourse(this.courseId);
    this.assignments = this.dataService.getCourseAssignment(this.courseId);
  }

  // Format date for calendar component
  convertDate(date) {
    return(new FormControl(new Date(date)).value);
  }

  // Open modal for quotation request overview
  openModifyDialog(index): void {
    console.log(index);
    const dialogRef = this.dialog.open(ModifyAssignmentModalComponent, {
      width: '800px',
      // Data to inject into modal
      data: { assignment: this.assignments[index] }
    });

    // Save changes back to assignment
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.assignments[index] = result;
      }
    });
  }
}
