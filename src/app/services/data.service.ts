import { Injectable } from '@angular/core';
import { BaseCommService } from './base-comm.service';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { CourseItem, AssignmentItem } from '../templates/template';

@Injectable({
  providedIn: 'root'
})
export class DataService extends BaseCommService {

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  // GET all courses
  getCourses(): Observable<CourseItem[]> {
    return this.getRequest('courses').pipe(
      map(response => response)
    );
  }

  // GET course by id
  getCourse(id: number): Observable<CourseItem> {
    return this.getRequest(`courses/${id}`).pipe(
      map(response => response)
    );
  }

  // GET all assignments by course id
  getCourseAssignments(courseId: number): Observable<AssignmentItem[]> {
    return this.getRequest(`assignments/${courseId}`).pipe(
      map(response => response)
    );
  }

  // POST (create new) course
  addCourse(course: Object): Observable<any> {
    console.log(JSON.stringify(course));
    return this.postRequest('courses', JSON.stringify(course));
  }

  // POST (create new) assignment
  addAssignment(assignment: Object): Observable<any> {
    console.log(JSON.stringify(assignment));
    return this.postRequest('assignments', JSON.stringify(assignment));
  }

  // PUT (update) course
  updateCourse(course: Object): Observable<any> {
    console.log(JSON.stringify(course));
    return this.putRequest('courses', JSON.stringify(course));
  }

  // PUT (update) assignment
  updateAssignment(assignment: Object): Observable<any> {
    console.log(JSON.stringify(assignment));
    return this.putRequest('assignments', JSON.stringify(assignment));
  }
}
