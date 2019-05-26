import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CourseItem, AssignmentItem } from '../templates/template';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courseId: number;
  courseItem: CourseItem;
  assignments: AssignmentItem[];

  constructor(protected dataService: DataService, protected route: ActivatedRoute) {
    this.courseId = Number(route.snapshot.paramMap.get('id'))
  }

  ngOnInit() {
    this.courseItem = this.dataService.getCourse(this.courseId);
    this.assignments = this.dataService.getCourseAssignment(this.courseId);
  }
}
