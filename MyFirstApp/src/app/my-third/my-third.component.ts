import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sony-my-third',
  templateUrl: './my-third.component.html',
  styles: [`
      p {
      color: blue;
      font-size: 14px;
    }
  `]
})
export class MyThirdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
