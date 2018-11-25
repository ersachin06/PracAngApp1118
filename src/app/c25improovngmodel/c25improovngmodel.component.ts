import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c25improovngmodel',
  templateUrl: './c25improovngmodel.component.html',
  styleUrls: ['./c25improovngmodel.component.css']
})
export class C25improovngmodelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  str:string;

   fun(str:string)
  {
    this.str=str;
    alert("btn clicked "+ str);
  }
  str2:string;
  fun2(str:string)
  {
    this.str2=str;
    alert("key pressed txt course typed and data typed is : "+ this.str2);
  }
}
