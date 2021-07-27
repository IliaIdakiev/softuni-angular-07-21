import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  @Input() set appMyIf(isVisible: boolean) {
    if (isVisible) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, { data: 123, $implicit: 'HELLO WORLD!' });
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }


}
