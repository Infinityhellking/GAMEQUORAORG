import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { LoginserviceService } from '../../loginservice.service';
import { FormcontrolValidationService } from '../../service/formcontrol-validation.service';


@Component({
  selector: 'app-reglog',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './reglog.component.html',
  styleUrl: './reglog.component.css'
})
export class ReglogComponent {
signinto() {
throw new Error('Method not implemented.');
}
  loginpage:any;
  validate:any;
  regpage:any;
  router: any;
 


  constructor(public cs:LoginserviceService, _router :Router,private _validate:FormcontrolValidationService) {
    this.router = _router;
    this.validate = _validate;
    this.loginpage=new FormGroup({
      useremail: new FormControl('',Validators.required),
      pass:new FormControl('',Validators.required),
    })

    this.regpage=new FormGroup({
      fullname:new FormControl('',Validators.required),
      regemail:new FormControl('',Validators.required),
      mobilenumber:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      confirmpassword:new FormControl('',Validators.required)


    })

  }

  // required(controls:any){
    
  //   let valid=this.loginpage.get(controls)

  //   if(valid.errors?.required && valid.touched){
  // return true;
  //   }
  //   return false;
  // }


  
  
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

    if(this.loginpage.valid){
      this.router.navigate(['/main']);
    }
    else{
      this.checkValidityAndMarkAsTouched();
    }
  }

  signuppage(){

      if(this.regpage.valid){
        this.router.navigate(['/main']);
      }
      else{
        this.checkValidityAndMarkAsTouchedreg();
      }
      
    }
   
  

  checkValidityAndMarkAsTouched(): void {
    // Loop through all form controls and mark them as touched
    Object.keys(this.loginpage.controls).forEach((controlName) => {
      const control = this.loginpage.get(controlName);
      if (control) {
        control.markAsTouched();
      }
    });
  }
  checkValidityAndMarkAsTouchedreg(): void {
    // Loop through all form controls and mark them as touched
    Object.keys(this.regpage.controls).forEach((controlName) => {
      const control = this.regpage.get(controlName);
      if (control) {
        control.markAsTouched();
      }
    });
  }

}
