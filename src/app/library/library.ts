import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LibraryHero } from './hero/library-hero';
import { Document, MOCK_DOCUMENTS } from './library-data';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, FormsModule, LibraryHero],
  templateUrl: './library.html',
  styleUrl: './library.css',
})
export class Library implements OnInit {
  // Mock Data
  private allDocuments = signal<Document[]>(MOCK_DOCUMENTS);

  // Filters State
  searchQuery = signal('');
  selectedDiscipline = signal('Toutes');
  selectedType = signal('Tous');

  // Available Filter Options
  disciplines = [
    'Toutes', 'Informatique', 'Droit', 'Économie', 'Environnement', 
    'Architecture', 'Médecine', 'Sociologie', 'Histoire', 'Lettres Mod.'
  ];
  types = ['Tous', 'Mémoire', 'Thèse', 'Article'];

  // Pagination State
  currentPage = signal(1);
  itemsPerPage = 10;

  // Total filtered documents (before pagination)
  filteredDocuments = computed(() => {
    // We reset the page when filters change (using effect-like logic inside the computed)
    // To do this properly without side effects in computed, we'll slice in another computed
    return this.allDocuments().filter(doc => {
      const matchesSearch = doc.title.toLowerCase().includes(this.searchQuery().toLowerCase()) || 
                           doc.author.toLowerCase().includes(this.searchQuery().toLowerCase());
      const matchesDiscipline = this.selectedDiscipline() === 'Toutes' || doc.discipline === this.selectedDiscipline();
      const matchesType = this.selectedType() === 'Tous' || doc.type === this.selectedType();
      
      return matchesSearch && matchesDiscipline && matchesType;
    });
  });

  // Paginated View
  paginatedDocuments = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    return this.filteredDocuments().slice(start, start + this.itemsPerPage);
  });

  totalPages = computed(() => Math.ceil(this.filteredDocuments().length / this.itemsPerPage));

  // Helper for pagination UI
  pages = computed(() => {
    const total = this.totalPages();
    return Array.from({ length: total }, (_, i) => i + 1);
  });

  ngOnInit() {}

  setDiscipline(discipline: string) {
    this.selectedDiscipline.set(discipline);
    this.currentPage.set(1);
  }

  setType(type: string) {
    this.selectedType.set(type);
    this.currentPage.set(1);
  }

  setPage(page: number) {
    this.currentPage.set(page);
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }); // Scroll to grid top
  }

  onSearchChange() {
    this.currentPage.set(1);
  }
}
