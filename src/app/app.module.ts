import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseComponent } from './course/course.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// For mockup server
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// All material imports are in same file
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModifyAssignmentModalComponent } from './course/modify-assignment-modal/modify-assignment-modal.component';
import { AddAssignmentModalComponent } from './course/add-assignment-modal/add-assignment-modal.component';
import { AddCourseModalComponent } from './courses/add-course-modal/add-course-modal.component';
import { ModifyCourseModalComponent } from './courses/modify-course-modal/modify-course-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    PageNotFoundComponent,
    CourseComponent,
    ModifyAssignmentModalComponent,
    AddAssignmentModalComponent,
    AddCourseModalComponent,
    ModifyCourseModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  // Modals to load dynamically
  entryComponents: [
    ModifyAssignmentModalComponent,
    AddAssignmentModalComponent,
    ModifyCourseModalComponent,
    AddCourseModalComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
