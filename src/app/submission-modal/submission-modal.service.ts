import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmissionModalService {
  private isOpen = signal(false);

  get isModalOpen() {
    return this.isOpen.asReadonly();
  }

  open() {
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.isOpen.set(false);
    document.body.style.overflow = '';
  }
}
