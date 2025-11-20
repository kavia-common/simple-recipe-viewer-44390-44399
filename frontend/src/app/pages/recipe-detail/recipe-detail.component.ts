import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div *ngIf="recipe as r" class="container">
      <a routerLink="/" class="back">&larr; Back to list</a>
      <h1>{{ r.title }}</h1>
      <img [src]="r.image" [alt]="r.title" />
      <section class="meta">
        <span>Prep: {{ r.prepTime || '?' }}</span>
        <span>Cook: {{ r.cookTime || '?' }}</span>
      </section>
      <h2>Ingredients</h2>
      <ul>
        <li *ngFor="let i of r.ingredients">{{ i }}</li>
      </ul>
      <h2>Instructions</h2>
      <p>{{ r.instructions }}</p>
    </div>
  `,
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  private route = inject(ActivatedRoute);
  private service = inject(RecipeService);
  recipe?: Recipe;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getRecipe(id).subscribe(r => (this.recipe = r));
  }
}
