import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: 'studentsData', component: StudentsComponent },
  { path: 'coursesStats', component: CoursesComponent },
  { path: 'register-Student', component: RegisterStudentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
