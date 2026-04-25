import { Component, OnInit, OnDestroy, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { animate } from 'motion';

@Component({
  selector: 'app-library-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './library-hero.html',
  styleUrl: './library-hero.css',
})
export class LibraryHero implements OnInit, OnDestroy, AfterViewInit {
  currentTitleIndex = signal(0);
  titles = [
    'rigoureux',
    'complet',
    'accessible',
    'vérifié',
    'collaboratif'
  ];

  stars1: string;
  stars2: string;
  stars3: string;
  private intervalId: any;

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

    const parallaxContainer = document.getElementById('library-stars-parallax');
    if (parallaxContainer) {
      parallaxContainer.style.transform = `translate(${newOffsetX}px, ${newOffsetY}px)`;
    }
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentTitleIndex.update(idx => (idx + 1) % this.titles.length);
    }, 3000);
  }

  ngAfterViewInit() {
    // Stars Vertical Infinite Scroll
    animate('#lib-stars-1', { y: [0, -2000] }, { repeat: Infinity, duration: 50, ease: 'linear' } as any);
    animate('#lib-stars-2', { y: [0, -2000] }, { repeat: Infinity, duration: 100, ease: 'linear' } as any);
    animate('#lib-stars-3', { y: [0, -2000] }, { repeat: Infinity, duration: 150, ease: 'linear' } as any);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  private startRotation() {
    this.intervalId = setInterval(() => {
      this.currentTitleIndex.update(index => (index + 1) % this.titles.length);
      this.animateTitleTransition();
    }, 2500);
  }

  private animateTitleTransition() {
    // La logique d'animation sera gérée par les classes CSS ou Motion
    // Ici on peut déclencher des animations spécifiques si besoin
  }
}
