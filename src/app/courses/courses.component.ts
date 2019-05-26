import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CourseItem, AssignmentItem } from '../templates/template';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: CourseItem[];

  constructor(protected dataService: DataService, protected router: Router) { }

  ngOnInit() {
    this.courses = this.dataService.getCourses();
    console.log(this.courses);
  }

  onSelect(id: number) {
    console.log('onSelect: ' + id);
    this.router.navigate(['/course/' + id]);
  }

}
