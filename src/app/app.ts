import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { StatsComponent } from './components/stats/stats.component';
import { CardsComponent } from './components/cards/cards.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SearchbarComponent, StatsComponent, CardsComponent],
  template: `
    <app-header></app-header>
    <app-searchbar></app-searchbar>
    <app-stats></app-stats>
    <app-cards></app-cards>
  `,
  // styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angulartest');
}
