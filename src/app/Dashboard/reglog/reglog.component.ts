import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { LoginserviceService, logdata } from '../../loginservice.service';

@Component({
  selector: 'app-reglog',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './reglog.component.html',
  styleUrl: './reglog.component.css'
})
export class ReglogComponent {

  infinity:logdata|any;
  router: any;


  constructor(public cs:LoginserviceService, _router :Router) {
    this.router = _router;
    this.infinity=new FormGroup({
      useremail: new FormControl('',Validators.required),
      pass:new FormControl('',Validators.required),
    })
  }

  required(controls:any){
    let valid=this.infinity.get(controls)
    if(valid.errors?.required && valid.touched){
  return true;
    }
    return false;
  }


  
  
    signUp(){
      const regpage= document.getElementsByClassName('regpage')
      const signUpbtnlink= document.getElementsByClassName('signUpbtnlink')
      const signInbtnlink= document.getElementsByClassName('signInbtnlink')
      
      regpage[0].classList.add('active')
    }
  
    LoginUp(){
      const regpage= document.getElementsByClassName('regpage')
      const signUpbtnlink= document.getElementsByClassName('signUpbtnlink')
      const signInbtnlink= document.getElementsByClassName('signInbtnlink')
      
      regpage[0].classList.remove('active')
    }


  logininto(){

    if(this.infinity.valid){
      this.router.navigate(['/main']);
    }
    else{
      this.checkValidityAndMarkAsTouched();
    }

   
  }

  checkValidityAndMarkAsTouched(): void {
    // Loop through all form controls and mark them as touched
    Object.keys(this.infinity.controls).forEach((controlName) => {
      const control = this.infinity.get(controlName);
      if (control) {
        control.markAsTouched();
      }
    });
  }
    

}
