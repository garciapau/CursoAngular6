import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './app.welcome.html',
  styleUrls: ['./app.welcome.css']
})
export class AppWelcome {
  title = 'Curso Basico Angular 6';
  item = 0;

  increaseValue() {
    this.item++;
  }

  getItem() {
    return this.item;
  }

  tooHigh() {
    return this.item > 10;
  }

  high() {
    return this.item > 6;
  }

  change(event) {
    this.item=event.data;
  }
}
