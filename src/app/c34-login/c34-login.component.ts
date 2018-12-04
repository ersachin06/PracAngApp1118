import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c34-login',
  templateUrl: './c34-login.component.html',
  styleUrls: ['./c34-login.component.css']
})
export class C34LoginComponent implements OnInit {

  email: string;
  password: string;
  
    constructor(private router:Router) { }
  
    ngOnInit() {
    }
    login() {
      if(this.email == 'a' && this.password == 'a') {
      this.router.navigate(['student']);
      }else {
      alert("Invalid credentials.")
      }
      }
}
