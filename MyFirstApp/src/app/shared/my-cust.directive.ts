import { Directive, Input, Renderer2, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[myCustDir]'
})
export class MyCustDirective {

  @Input() company: string;

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef){


      // this.viewContainerRef.createEmbeddedView(templateRef);
      // for( let i of [1,2,3,4,5]) {
      //     this.viewContainerRef.createEmbeddedView(templateRef);
      // }

      this.viewContainerRef.clear()

  }

}
