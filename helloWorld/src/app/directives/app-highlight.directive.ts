import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class AppHighlightDirective {

  @Input() appHighlight = ''

  constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log("onMouseEnter")
    this.changeColor(this.appHighlight)
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log("onMouseLeave")
    this.changeColor('transparent')
  }

  private changeColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }
}
