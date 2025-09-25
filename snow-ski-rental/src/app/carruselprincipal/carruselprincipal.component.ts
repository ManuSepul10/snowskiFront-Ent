import { Component, Input, SimpleChanges } from '@angular/core';
import { imagenes } from '../models/imagenes';

@Component({
  selector: 'app-carruselprincipal',
  standalone: false,
  templateUrl: './carruselprincipal.component.html',
  styleUrl: './carruselprincipal.component.css'
})
export class CarruselprincipalComponent {
  @Input() items: imagenes[] = [];

  @Input() height: number = 500;

  currentPosition = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes['items'] && this.items.length > 0) {
      this.items.forEach((item, index) => {
        item.id = index;
      //  item.marginLeft = 0;
      });
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.setNext();
    }, 5000);
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    //this.items[0].marginLeft = -100 * position;
  }

  setNext() {
    const nextPosition = this.currentPosition + 1;
    this.setCurrentPosition(nextPosition >= this.items.length ? 0 : nextPosition);
  }

  setBack() {
    const prevPosition = this.currentPosition - 1;
    this.setCurrentPosition(prevPosition < 0 ? this.items.length - 1 : prevPosition);
  }
}
