import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[myAttrDir]'
})
export class MyAttributeDirective {

  @Input() name: string;

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.background = 'red';
    this.elementRef.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('click')
  onClickMyElement() {
    this.elementRef.nativeElement.style.background = 'blue';
    this.elementRef.nativeElement.innerText = this.name;
  }

  @HostListener('mouseenter')
  onMouseEnterElement() {
    this.elementRef.nativeElement.style.background = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeaveElement() {
    this.elementRef.nativeElement.style.background = 'red';
  }

}
