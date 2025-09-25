import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppScrollReveal]',
  standalone: false
})
export class AppScrollRevealDirective {


   constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit():
   void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          this.renderer.addClass(this.el.nativeElement, 'reveal-show',);
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.1 });

    
    this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');
    
    observer.observe(this.el.nativeElement);
  }

}

