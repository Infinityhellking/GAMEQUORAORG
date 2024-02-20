import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { QuestionComponent } from './question/question.component';

@Component({
    selector: 'app-mainpage',
    standalone: true,
    templateUrl: './mainpage.component.html',
    styleUrl: './mainpage.component.css',
    imports: [NavbarComponent,RouterOutlet,DiscoverComponent,QuestionComponent]
})
export class MainpageComponent {

}
