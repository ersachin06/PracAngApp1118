import { Component, OnInit } from '@angular/core';
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
@Component({
  selector: 'app-c25portal',
  templateUrl: './c25portal.component.html',
  styleUrls: ['./c25portal.component.css']
})
export class C25portalComponent implements OnInit {

  dynamicComponent=TeacherComponent;
  constructor() { }

  ngOnInit() {
  }

  onbtnClick()
  {
    this.dynamicComponent=StudentComponent;
  }
}
