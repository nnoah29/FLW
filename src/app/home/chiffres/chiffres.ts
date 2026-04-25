import { Component, AfterViewInit } from '@angular/core';
import { animate, scroll } from 'motion';

@Component({
  selector: 'app-chiffres',
  imports: [],
  templateUrl: './chiffres.html',
  styleUrl: './chiffres.css',
})
export class Chiffres implements AfterViewInit {
  ngAfterViewInit() {
    const glow = document.getElementById('metrics-glow');
    const container = document.getElementById('metrics-container');

    if (glow) {
      scroll(
        animate(glow, { y: [-50, 50], opacity: [0.3, 0.6] }, { ease: "linear" } as any),
        {
          target: glow,
          offset: ["start end", "end start"]
        }
      );
    }

    if (container) {
      scroll(
        animate(container, { y: [40, -40] }, { ease: "linear" } as any),
        {
          target: container,
          offset: ["start end", "end start"]
        }
      );
    }
  }
}
