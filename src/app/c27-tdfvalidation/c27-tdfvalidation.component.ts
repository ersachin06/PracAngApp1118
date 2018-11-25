import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c27-tdfvalidation',
  templateUrl: './c27-tdfvalidation.component.html',
  styleUrls: ['./c27-tdfvalidation.component.css']
})
export class C27TDFValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data:any;
  fun(data:any)
  {
    console.log(data);
    console.log(data["txtCity"]+" "+ data["txtName"]+" "+ data["txtEmail"]+" "+ data["txtUnm"]);
    console.log(data["address"]);
    this.data=data;
  }
}
