import { Injectable } from '@angular/core';
import { BaseCommService } from './base-comm.service';
import { HttpClient } from '@angular/common/http';

import { CourseItem, AssignmentItem } from '../templates/template';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseCommService{

  constructor(protected httpClient: HttpClient) { 
    super(httpClient);
  }

  getCourses(): CourseItem[] {
    return courseItems;
  }

  getCourse(index: number): CourseItem {
    return courseItems.filter((item) => item.course_id === index).pop();
  }

  getCourseAssignment(courseId: number): AssignmentItem[] {
    return assignmentsItems.filter((item) => item.course_id_FK === courseId);
  }
}

const courseItems: CourseItem[] = [
  {
    course_id: 0,
    name: 'Browser As A Platform',
    start_date: '2019-01-01',
    end_date: '2019-03-18'
  },
  {
    course_id: 1,
    name: 'Server Side Programming',
    start_date: '2019-01-01',
    end_date: '2019-03-18'
  },
  {
    course_id: 2,
    name: 'Web Frameworks',
    start_date: '2019-03-20',
    end_date: '2019-04-30'
  }
];

const assignmentsItems: AssignmentItem[] = [
  {
    assignment_id: 0,
    name: 'Week 19 essay',
    desc: 'Write essay about jQuery',
    state: 'armed',
    created_date: '2019-04-01',
    due_date: '2019-04-15',
    course_id_FK: 0
  },
  {
    assignment_id: 1,
    name: 'ES6 game',
    desc: 'ES6 game development',
    state: 'armed',
    created_date: '2019-04-01',
    due_date: '2019-04-17',
    course_id_FK: 0
  },
  {
    assignment_id: 2,
    name: 'Week 21 essay',
    desc: 'Write essay about ES6',
    state: 'armed',
    created_date: '2019-04-01',
    due_date: '2019-04-29',
    course_id_FK: 0
  },
];
