import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-c28-reactive-forms',
  templateUrl: './c28-reactive-forms.component.html',
  styleUrls: ['./c28-reactive-forms.component.css']
})
export class C28ReactiveFormsComponent implements OnInit {

  rForm:FormGroup;
  constructor(private fb:FormBuilder)
  {

  }
 

  ngOnInit() {
    this.rForm=this.fb.group({

      //here null is initial value
             "name": [null,Validators.required],
      "descriptions":[null,Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])],
      "validty":''
      
      });      
      this.rForm.get("validty").valueChanges.subscribe(validation=>{
        console.log(validation);
        if(validation)
        {
          this.rForm.get("name").setValidators([Validators.required,Validators.minLength(3)])
        }
        else{
          this.rForm.get("name").setValidators([Validators.required])
        }
        this.rForm.get("name").updateValueAndValidity();
      });//sat arraow function ends here
  }

  
    //coz we want to objserve changes inside checkbox so that’s why we subscribed.
    //we want to know about the changes inside property validty.
   
    

  addPost(data)
  {
	  console.log(data);
  }


}
