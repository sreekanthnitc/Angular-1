import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any[];

  constructor() { }

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        title: 'Angular Global Mentoring Program [2019Q3 IN]',
        description: `This is first course `,
        duration: 120,
        creationDate: new Date()
      }, {
        id: 2,
        title: 'Design Patterns in Java',
        description: `This is second course`,
        duration: 120,
        creationDate: new Date()
      }, {
        id: 3,
        title: 'Design Patterns in JS',
        description: `This is third course`,
        duration: 120,
        creationDate: new Date()
      }
    ];
  }

}
