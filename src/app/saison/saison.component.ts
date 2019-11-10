import { Component, OnInit ,NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-saison',
  templateUrl: './saison.component.html',
  styleUrls: ['./saison.component.css']
})
@NgModule({
  
  imports: [
    BrowserModule,
    FormsModule,
   
  ],
 
})
export class SaisonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

numb:number;
}
