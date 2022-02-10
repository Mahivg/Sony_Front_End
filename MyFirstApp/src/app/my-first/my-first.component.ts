import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: 'my-first',
  // template: `
  //   <h1> This is My First created component </h1>
  //   <p> Created manually by creating files </p>
  // `,
  // styles: [`
  //   h1 {
  //     color: #2647cE
  //   }
  // `]
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})
export class MyFirstComponent {
  title = 'MyFirstComponent';
  myNum: number = 10;

  toggleDiv: boolean = true;

  myObj = { a : 1 };

  myArr =  [1, 2, 3, 4, 5];

  @ViewChild('myNumInput')
  myNumberInput: ElementRef;

  setCompTitle(newTitle: string) {
    this.title = newTitle;
    this.toggleDiv = (!this.toggleDiv);
  }

  updateMyNum() {
    console.dir(this.myNumberInput);
    this.myNum = +this.myNumberInput.nativeElement.value;
  }


}
