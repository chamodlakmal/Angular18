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
    this.changeBackgroundColor(this.appHighlight)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('transparent')
  }

  private changeBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
