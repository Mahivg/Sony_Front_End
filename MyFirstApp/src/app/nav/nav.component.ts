import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output('tabChange')
  onTabChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tabName: string) {
    this.onTabChange.emit(tabName);
  }

}
