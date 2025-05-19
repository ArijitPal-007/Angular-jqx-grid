import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jqx-grid';
  counter = 0;
  
  update() {
    this.counter++;
  }
}
