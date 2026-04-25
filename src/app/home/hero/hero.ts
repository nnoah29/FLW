import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, stagger, inView, scroll } from 'motion';
import { SubmissionModalService } from '../../submission-modal/submission-modal.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit {
  private modalService = inject(SubmissionModalService);

  openModal() {
    this.modalService.open();
  }
  stars1: string;
  stars2: string;
  stars3: string;

  constructor() {
    this.stars1 = this.generateStars(1000, '#ffffff');
    this.stars2 = this.generateStars(400, '#ffffff');
    this.stars3 = this.generateStars(200, '#ffffff');
  }

  generateStars(count: number, starColor: string): string {
    const shadows: string[] = [];
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 4000) - 2000;
      const y = Math.floor(Math.random() * 4000) - 2000;
      shadows.push(`${x}px ${y}px ${starColor}`);
    }
    return shadows.join(', ');
  }

  onMouseMove(event: MouseEvent) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const factor = 0.05;
    const newOffsetX = -(event.clientX - centerX) * factor;
    const newOffsetY = -(event.clientY - centerY) * factor;

    const parallaxContainer = document.getElementById('stars-parallax');
    if (parallaxContainer) {
      // Direct raw DOM transformation for optimal performance
      parallaxContainer.style.transform = `translate(${newOffsetX}px, ${newOffsetY}px)`;
    }
  }

  ngAfterViewInit() {
    // Stars Vertical Infinite Scroll Animations
    animate('#stars-1', { y: [0, -2000] }, { repeat: Infinity, duration: 50, ease: 'linear' } as any);
    animate('#stars-2', { y: [0, -2000] }, { repeat: Infinity, duration: 100, ease: 'linear' } as any);
    animate('#stars-3', { y: [0, -2000] }, { repeat: Infinity, duration: 150, ease: 'linear' } as any);

    // 1. Stagger animation for text elements
    const animItems = document.querySelectorAll('.hero__anim-item');
    if (animItems.length > 0) {
      animate(
        animItems,
        { opacity: [0, 1], y: [16, 0] },
        { 
          delay: stagger(0.12), 
          duration: 0.7, 
          ease: [0.16, 1, 0.3, 1] 
        } as any
      );
    }

    // 2. Mockup scale-in animation when scrolling into view
    const mockupWrapper = document.getElementById('hero-mockup-wrapper');
    if (mockupWrapper) {
      // Entrée initiale
      inView(mockupWrapper, () => {
        animate(
          mockupWrapper,
          { opacity: [0, 1], y: [40, 0], scale: [0.97, 1] },
          { 
            delay: 0.2, 
            duration: 1, 
            ease: [0.16, 1, 0.3, 1] 
          } as any
        );
      });

      // Effet Parallax au scroll
      scroll(
        animate(mockupWrapper, { y: [0, 150] }, { ease: "linear" } as any),
        {
          target: mockupWrapper,
          offset: ["start end", "end start"]
        }
      );
    }
  }
}