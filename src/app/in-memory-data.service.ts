import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CourseItem, AssignmentItem } from './templates/template';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
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
        desc: 'Write essay about ES6',
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
        due_date: '2019-04-15',
        course_id_FK: 0
      },
      {
        assignment_id: 2,
        name: 'Week 19 essay',
        desc: 'Write essay about ES6',
        state: 'armed',
        created_date: '2019-04-01',
        due_date: '2019-04-15',
        course_id_FK: 0
      },
    ];
    return {'courseItems': courseItems, 'assignmentsItems': assignmentsItems};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  
  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}