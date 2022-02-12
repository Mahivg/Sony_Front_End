import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

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

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }

}
