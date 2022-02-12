import { Component } from '@angular/core';

@Component({
  selector: 'sony-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PooriApp';
  currentTabName: string = 'login';

  receiveTabChange(tabName: string) {
    this.currentTabName = tabName;
  }


}
