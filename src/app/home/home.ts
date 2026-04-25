import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Chiffres } from './chiffres/chiffres';
import { HowToWork } from './how-to-work/how-to-work';
import { Thematiques } from './thematiques/thematiques';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Chiffres, HowToWork, Thematiques],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
