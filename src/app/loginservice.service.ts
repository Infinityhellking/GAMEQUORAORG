import { Injectable } from '@angular/core';


export class logdata{

  uname!:string;
  pass!:string;

}







@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }
}
