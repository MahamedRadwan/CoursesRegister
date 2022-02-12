import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { StudentsCoursesDataService } from '../students-courses-data.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  coursesList: any =0;
  studentsList: any=0 ;
  registeredCoursesList: any =0;
  


  constructor(private _servcies:StudentsCoursesDataService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.getcourselist();
    this.getstudentlist();
    this.getregisteredCoursesList();
  }

  getcourselist()
  {
    this.coursesList = this._servcies.courses.length
    console.log(this.coursesList);
    
  }
  getstudentlist()
  {
    this.studentsList = 0;
    this.studentsList = this._servcies.students.length
    console.log(this.studentsList);
    
  }
  getregisteredCoursesList()
  {
    this.registeredCoursesList = this._servcies.registeredCourses.length
    console.log(this.registeredCoursesList);
    
  }
  pieChartOptions: ChartOptions = {
    responsive: true,
  };
  pieChartLabels: Label[] = [['Course'], ['RegisteredCourses'], 'Students'];
  pieChartData: SingleDataSet = [this.coursesList,this.studentsList,this.registeredCoursesList ];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];

  ngOnInit(): void {
   
  }

}
