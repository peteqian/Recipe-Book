// import { Recipe } from '../recipe.model';
// import * as RecipeActions from './recipe.actions';

// export interface State {
//   recipes: Recipe[];
// }

// const initialState: State = {
//   recipes: [],
// };

// // create an initial state with empty recipes array and return it
// export function recipeReducer(
//   state = initialState,
//   action: RecipeActions.RecipeActions
// ) {
//   switch (action.type) {
//     case RecipeActions.SET_RECIPES:
//       return {
//         ...state,
//         recipes: [...action.payload],
//       };
//     case RecipeActions.ADD_RECIPE:
//       return {
//         ...state,
//         recipes: [...state.recipes, action.payload],
//       };
//     case RecipeActions.UPDATE_RECIPE:
//       const updatedRecipe = {
//         ...state.recipes[action.payload.index],
//         ...action.payload.newRecipe,
//       };
//       const updatedRecipes = [...state.recipes];
//       updatedRecipes[action.payload.index] = updatedRecipe;
//       return {
//         ...state,
//         recipes: updatedRecipes,
//       };
//     case RecipeActions.DELETE_RECIPE:
//       return {
//         ...state,
//         recipes: state.recipes.filter((recipe, index) => {
//           return index !== action.payload;
//         }),
//       };
//     default:
//       return state;
//   }
// }

import { Action, createReducer, on } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import * as RecipesActions from '../recipes-store/recipe.actions';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [],
};

const _recipeReducer = createReducer(
  initialState,

  on(RecipesActions.addRecipe, (state, action) => ({
    ...state,
    recipes: state.recipes.concat({ ...action.recipe }),
  })),

  on(RecipesActions.updateRecipe, (state, action) => ({
    ...state,
    recipes: state.recipes.map((recipe, index) =>
      index === action.index ? { ...action.recipe } : recipe
    ),
  })),

  on(RecipesActions.deleteRecipe, (state, action) => ({
    ...state,
    recipes: state.recipes.filter((_, index) => index !== action.index),
  })),

  on(RecipesActions.setRecipes, (state, action) => ({
    ...state,
    recipes: [...action.recipes],
  }))
);

export function recipeReducer(state: State, action: Action) {
  return _recipeReducer(state, action);
}
