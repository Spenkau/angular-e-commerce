import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTextTransform]'
})
export class TextTransformDirective {
  firstLetter: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {

    this.firstLetter = this.el.nativeElement.textContent.charAt(0)
    this.renderer.setStyle(this.el.nativeElement.textContent.charAt(0), 'color', 'red');
  }

}
