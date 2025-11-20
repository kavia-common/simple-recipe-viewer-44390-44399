import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a class="card" [routerLink]="['/recipe', recipe.id]">
      <img [src]="recipe.image" [alt]="recipe.title" />
      <div class="info">
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>
      </div>
    </a>
  `,
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
}
