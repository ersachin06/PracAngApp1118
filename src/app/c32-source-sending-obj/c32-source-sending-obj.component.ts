import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c32-source-sending-obj',
  templateUrl: './c32-source-sending-obj.component.html',
  styleUrls: ['./c32-source-sending-obj.component.css']
})
export class C32SourceSendingObjComponent implements OnInit {

  constructor(private router:Router) { }

  
  ngOnInit() {
  }

  funSendObj()
  {
    let obj=
    {
      skipLocationChange:true,//parameter will not be displayed in url now.
      queryParams:{
          "firstName":"john",
          "lastName":"Smith"
      }
      
    }

    this.router.navigate(['/dstRcvObj'],obj);
    console.log(obj);
    console.log(obj["queryParams"]);
    console.log(obj["queryParams"]["firstName"]);
    console.log(obj["queryParams"]["lastName"]);
  
  }
}
