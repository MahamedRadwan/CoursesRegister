import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Router} from '@angular/router';
import { StudentsCoursesDataService } from '../students-courses-data.service'

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

  constructor(private _StudentCoursesData: StudentsCoursesDataService ,private _router:Router) { this.getcourses()}

  courses1:any= [];
  courses2: any = [];
  selectOneListModel:any;
  selectTwoListModel:any;
  code: any;
  courseName2:any
  registeredCourses: object[] = [];
  getcourses()
  {
    this.courses1= this._StudentCoursesData.courses

     this.courses2=this._StudentCoursesData.courses
   
  }
  getRegisterInfo(registerForm:any): void {
   
    if (registerForm.valid == true) {
      console.log(registerForm.value);
      
      this._StudentCoursesData.addStudent(registerForm.value)
    }
  }
  back() { 
    this._router.navigate(['/studentsData'])
  }

  registerForm= new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
    age: new FormControl(null, [Validators.required, Validators.maxLength(2)]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    phone: new FormControl(null, [Validators.pattern("^01[0125][0-9]{8}$"), Validators.required]),
    course1: new FormControl(null, [Validators.required]),
    course2:new FormControl(),
    code:new FormControl()
  })

  ngOnInit(): void {
    
  }
  addcode()
  {
   this.code = this.registerForm.get('code') 
    this.code?.setValue(Math.round(Math.random() * 100))

    this.registeredCourses.push({ studentcode: this.code.value, courseName1: this.registerForm.get('course1')?.value })
    if (this.registerForm.get('course2')?.value )
    { 
      this.registeredCourses.push({ studentcode: this.code.value, courseName1: this.registerForm.get('course2')?.value })
    }
    this._StudentCoursesData.getregisterCoursesdata(this.registeredCourses)
    console.log( this.registeredCourses);
    
  }
  addcourses() {
   
    //
  }
  

}


