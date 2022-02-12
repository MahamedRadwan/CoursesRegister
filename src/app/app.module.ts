import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms'
import { ExcludeValuePipe } from './pipes/exclude-values';
import { ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CoursesComponent,
    NavBarComponent,
    RegisterStudentComponent,
    ExcludeValuePipe,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
