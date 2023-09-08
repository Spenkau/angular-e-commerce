import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appCategoryView]'
})
export class CategoryViewDirective {
  // @Input('fullText') fullText: string;

  constructor(
    private el: ElementRef
  ) { }

}
