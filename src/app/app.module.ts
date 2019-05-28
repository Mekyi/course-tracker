import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseComponent } from './course/course.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

// For mockup server
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// All material imports are in same file
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModifyAssignmentModalComponent } from './course/modify-assignment-modal/modify-assignment-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    PageNotFoundComponent,
    CourseComponent,
    ModifyAssignmentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  // Modals to load dynamically
  entryComponents: [
    ModifyAssignmentModalComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
