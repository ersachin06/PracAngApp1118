import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c31-ngcontent-home',
  templateUrl: './c31-ngcontent-home.component.html',
  styleUrls: ['./c31-ngcontent-home.component.css']
})
export class C31NgcontentHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  users:string[]=["rohan","sohan","mohan"];
}
