import { Action, createAction, props } from '@ngrx/store';
import { Recipe } from '../recipe.model';

// create action identifiers
// export const SET_RECIPES = '[Recipes] SET RECIPES';
// export const FETCH_RECIPES = '[Recipes] FETCH RECIPES';
// export const ADD_RECIPE = '[Recipes] ADD RECIPE';
// export const UPDATE_RECIPE = '[Recipes] UPDATE RECIPE';
// export const DELETE_RECIPE = '[Recipes] DELETE RECIPE';
// export const STORE_RECIPES = '[Recipes] STORE RECIPES';

// export class SetRecipes implements Action {
//   readonly type = SET_RECIPES;

//   constructor(public payload: Recipe[]) {}
// }

// export class FetchRecipes implements Action {
//   readonly type = FETCH_RECIPES;
// }

// export class AddRecipe implements Action {
//   readonly type = ADD_RECIPE;

//   constructor(public payload: Recipe) {}
// }

// export class UpdateRecipe implements Action {
//   readonly type = UPDATE_RECIPE;

//   constructor(public payload: { index: number; newRecipe: Recipe }) {}
// }

// export class DeleteRecipe implements Action {
//   readonly type = DELETE_RECIPE;

//   constructor(public payload: number) {}
// }

// export class StoreRecipes implements Action {
//   readonly type = 'STORE_RECIPES';
// }

// export type RecipeActions =
//   | SetRecipes
//   | AddRecipe
//   | UpdateRecipe
//   | DeleteRecipe
//   | StoreRecipes;

export const addRecipe = createAction(
  '[Recipe] Add Recipe',
  props<{
    recipe: Recipe;
  }>()
);

export const updateRecipe = createAction(
  '[Recipe] Update Recipe',
  props<{
    index: number;
    recipe: Recipe;
  }>()
);

export const deleteRecipe = createAction(
  '[Recipe] Delete Recipe',
  props<{
    index: number;
  }>()
);

export const setRecipes = createAction(
  '[Recipe] Set Recipes',
  props<{
    recipes: Recipe[];
  }>()
);

export const fetchRecipes = createAction('[Recipe] Fetch Recipes');

export const storeRecipes = createAction('[Recipe] Store Recipes');
