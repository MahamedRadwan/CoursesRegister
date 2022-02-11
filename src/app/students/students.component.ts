import { Component, OnInit } from '@angular/core';
import { StudentsCoursesDataService } from '../students-courses-data.service'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(private _students: StudentsCoursesDataService,) {}
  studentData: any = JSON.parse(localStorage.getItem("myStudents") as string);


  ngOnInit(): void {
    
    
  }


}
