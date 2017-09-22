import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>hi {{title}}</h1>'
})
export class AppComponent {
  public title: string = 'Running ng2';
}