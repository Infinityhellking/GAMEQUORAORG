import { Routes } from '@angular/router';
import { ReglogComponent } from './Dashboard/reglog/reglog.component';
import { NavbarComponent } from './Dashboard/mainpage/navbar/navbar.component';
import { MainpageComponent } from './Dashboard/mainpage/mainpage.component';
import { DiscoverComponent } from './Dashboard/mainpage/discover/discover.component';
import { QuestionComponent } from './Dashboard/mainpage/question/question.component';
import { ErrorpageComponent } from './Dashboard/errorpage/errorpage.component';
import { HomeComponent } from './Dashboard/mainpage/home/home.component';

export const routes: Routes = [
    
  {
    path:"",component:ReglogComponent,title:"GameQuora-Login",pathMatch:"full"
  },






  {
path:"main",component:MainpageComponent,children:[
    {
        path:"",component:HomeComponent
    },
    {
        path:"nav",component:NavbarComponent
      },
       {
        path:"disc",component:DiscoverComponent
       },
       {
        path:"ques",component:QuestionComponent
       },
      
]
  },
  {
    path:"**",component:ErrorpageComponent
  }
  
];
