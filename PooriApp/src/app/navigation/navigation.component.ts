import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sony-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output()
  onTabChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitTabName(tabName: string) {
    this.onTabChange.emit(tabName);
  }

}
