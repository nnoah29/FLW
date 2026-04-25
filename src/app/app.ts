import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { SubmissionModal } from "./submission-modal/submission-modal";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, Header, Footer, SubmissionModal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FLG');
}
