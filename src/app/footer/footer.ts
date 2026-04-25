import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SubmissionModalService } from '../submission-modal/submission-modal.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private modalService = inject(SubmissionModalService);

  openModal() {
    this.modalService.open();
  }
}
