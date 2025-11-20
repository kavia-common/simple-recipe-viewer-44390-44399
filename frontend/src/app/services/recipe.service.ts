import { Injectable, inject } from '@angular/core';
import { EnvironmentInjector } from '@angular/core';
import { Recipe } from '../models/recipe';
import { Observable, of } from 'rxjs';

// PUBLIC_INTERFACE
@Injectable({ providedIn: 'root' })
export class RecipeService {
  private readonly env = inject(EnvironmentInjector);
  private readonly apiBase = (this.env as any)?.get?.('NG_APP_API_BASE') || '';

  /** In-memory mock data until backend/API is wired */
  private recipes: Recipe[] = [
    {
      id: 1,
      title: 'Classic Spaghetti Bolognese',
      description: 'Rich tomato and meat sauce over al-dente spaghetti.',
      image: 'https://source.unsplash.com/featured/400x300?spaghetti',
      ingredients: [
        '200g spaghetti',
        '150g minced beef',
        '1 can crushed tomatoes',
        '1 onion, diced',
        '2 cloves garlic, minced',
        'Olive oil, salt & pepper'
      ],
      instructions:
        'Cook spaghetti according to package instructions. In a pan, sauté onion & garlic, add beef until browned, add tomatoes and simmer 15 min. Season and serve over spaghetti.',
      prepTime: '10 min',
      cookTime: '30 min'
    },
    {
      id: 2,
      title: 'Avocado Toast Deluxe',
      description: 'Creamy avocado on toasted sourdough with optional poached egg.',
      image: 'https://source.unsplash.com/featured/400x300?avocado-toast',
      ingredients: [
        '2 slices sourdough',
        '1 ripe avocado',
        '1 tbsp lemon juice',
        'Salt, pepper & chili flakes'
      ],
      instructions:
        'Toast bread. Mash avocado with lemon, salt & pepper. Spread on toast, sprinkle chili flakes. Add poached egg if desired.',
      prepTime: '5 min',
      cookTime: '5 min'
    }
  ];

  /**
   * Return all recipes. Uses mock when no API base configured.
   */
  // PUBLIC_INTERFACE
  getRecipes(): Observable<Recipe[]> {
    if (this.apiBase) {
      // TODO: switch to HttpClient when backend is ready
    }
    return of(this.recipes);
  }

  /**
   * Return a single recipe by id.
   */
  // PUBLIC_INTERFACE
  getRecipe(id: number): Observable<Recipe | undefined> {
    if (this.apiBase) {
      // TODO: switch to HttpClient when backend is ready
    }
    return of(this.recipes.find(r => r.id === id));
  }
}
