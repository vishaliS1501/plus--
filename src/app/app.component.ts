import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  num = 0;   
  clickCounter = 0;
  message = '';

  onClick() {
    this.clickCounter++;
    if (this.clickCounter === 1) {
 this.message = ' The button clicked once...true'; }
    if (this.clickCounter === 2) { this.message = 'The button clicked twice'; } }
  rstbtn()
  { this.num = 0; }
  incbtn(){ this.num = this.num + 1; }
  decbtn()
  { this.num = this.num - 1;
    if(this.num <0)
    { this.num = 0;    }
  }
}
