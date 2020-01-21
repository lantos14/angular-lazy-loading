import { Directive, ElementRef, AfterViewInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appIntersectionDirective]'
})
export class IntersectionDirective implements AfterViewInit {
  @Output() public imageInScope: EventEmitter<boolean> = new EventEmitter();
  constructor(private element: ElementRef) {
  }
  
  private intersectionObserver: IntersectionObserver;

  ngAfterViewInit() {
    const options = {
      rootMargin: '-50px 0px',
     };
    const callback = ((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        console.log('entry src: ', target.querySelector('img').getAttribute('src'));

        if (target.querySelector('img').getAttribute('src')) { return; }
        this.imageInScope.emit((isIntersecting && target === this.element.nativeElement));
      });
    });

    this.intersectionObserver = new IntersectionObserver(callback, options);

    this.intersectionObserver.observe(this.element.nativeElement);
  }
}
