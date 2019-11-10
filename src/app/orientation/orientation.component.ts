import { Component, OnInit ,NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.css']
})
@NgModule({
  
  imports: [
    BrowserModule,
    FormsModule,
   
  ],
 
})
export class OrientationComponent implements OnInit {
  etudiant={nom:'Ali', moyenne:10.85};
 
  or:string;
    constructor() { }

  ngOnInit() {
  
  }

}
