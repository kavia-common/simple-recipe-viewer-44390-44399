import { Component, computed, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { HeaderComponent } from '../../components/header/header.component';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RecipeCardComponent],
  template: `
    <app-header (search)="searchTerm.set($event)"></app-header>
    <main class="grid">
      <app-recipe-card
        *ngFor="let recipe of filtered()"
        [recipe]="recipe"
      ></app-recipe-card>
    </main>
  `,
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  private readonly service = inject(RecipeService);
  recipes = signal<Recipe[]>([]);
  searchTerm = signal<string>('');

  constructor() {
    this.service.getRecipes().subscribe(r => this.recipes.set(r));
  }

  filtered = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.recipes().filter(r => r.title.toLowerCase().includes(term));
  });
}
