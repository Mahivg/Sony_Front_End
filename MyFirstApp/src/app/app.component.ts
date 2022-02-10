import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';
  toggleSecondComponent : boolean = true;
  showFirst: boolean = true;
  showSecond: boolean = false;

  changeTab(firstComp: boolean, secondComp: boolean) {
    this.showFirst = firstComp;
    this.showSecond = secondComp;
  }
}
