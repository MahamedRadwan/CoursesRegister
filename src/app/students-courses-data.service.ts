import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsCoursesDataService {

  constructor() { }
  students: object[] = [];
  courses:object[]=
    [
    { name: 'English', code: 'en1' },
    { name: 'Math', code: 'ma1' },
    { name: 'German', code: 'ge1' }
  ];

  addStudent(data: object) {

    this.students.push(data);
    localStorage.setItem("myStudents", JSON.stringify(this.students)); //store students
    console.log(this.students);


  };


  registeredCourses: object[] = [];

  registerCourses(data: object) {

    this.registeredCourses.push(data);
    console.log(this.registeredCourses);

  };
}
