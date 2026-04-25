import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionModalService } from './submission-modal.service';

@Component({
  selector: 'app-submission-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submission-modal.html',
  styleUrl: './submission-modal.css',
})
export class SubmissionModal {
  protected modalService = inject(SubmissionModalService);

  onClose() {
    this.modalService.close();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    // Logique de soumission factice pour l'instant
    alert('Lien de soumission envoyé !');
    this.modalService.close();
  }

  // Empêcher la fermeture quand on clique sur le contenu du modal
  onContentClick(event: Event) {
    event.stopPropagation();
  }
}
