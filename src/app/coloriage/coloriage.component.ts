import { Component, OnInit, NgModule } from '@angular/core' ;
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({

  selector: 'app-coloriage',
  templateUrl: './coloriage.component.html',
  styleUrls: ['./coloriage.component.css'] ,
})
@NgModule({
  
  imports: [
    BrowserModule,
    FormsModule,
   
  ],
 
})
export class ColoriageComponent implements OnInit {
cols=["Arial","Calibri","Times New Roman"];

  constructor() { }

  ngOnInit() {
 
  }

}
