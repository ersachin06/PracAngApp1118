import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c26-template-driven-form',
  templateUrl: './c26-template-driven-form.component.html',
  styleUrls: ['./c26-template-driven-form.component.css']
})
export class C26TemplateDrivenFormComponent implements OnInit {

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
