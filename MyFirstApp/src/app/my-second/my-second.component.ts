import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class MySecondComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  myStr: string = '';

  constructor() {
    // Dependency Injection
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges : ' + changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit : ');
    this.myStr = 'MyStr1';
  }

  ngDoCheck(): void {
    console.log('ngDoCheck : ');

  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit : ');

  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked : ');

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit : ');

  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked : ');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy : ');
  }
}
