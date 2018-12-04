import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c33-dst-rcv-obj-query-string',
  templateUrl: './c33-dst-rcv-obj-query-string.component.html',
  styleUrls: ['./c33-dst-rcv-obj-query-string.component.css']
})
export class C33DstRcvObjQueryStringComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
data:any;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(d=>{
      console.log(d);
      this.data=d;
    });
  }

}
