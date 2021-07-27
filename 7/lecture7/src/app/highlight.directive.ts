import { Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighlight'
})
export class HighlightDirective { //implements OnChanges {

  @HostBinding('style.color') color = 'black';

  @Input() set appHighlight(isActive: boolean) {
    if (isActive) {
      this.color = 'red';
    } else {
      this.color = 'black';
    }
  }

  // constructor(
  //   private elementRef: ElementRef
  // ) { }

  // ngOnChanges(
  //   // simpleChanges: SimpleChanges
  // ) {
  //   if (this.isActive) {
  //     this.elementRef.nativeElement.style.color = 'red';
  //   } else {
  //     this.elementRef.nativeElement.style.color = 'black';
  //   }
  // }
}
