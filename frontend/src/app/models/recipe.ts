export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string;
  prepTime?: string;
  cookTime?: string;
}
