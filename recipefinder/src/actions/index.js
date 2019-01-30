
// ACTION TYPES
export const SET_RECIPES = 'SET_RECIPES';
export const FAVOURITE_RECIPE = 'FAVOURITE_RECIPE';
export const UNFAVOURITE_RECIPE = 'UNFAVOURITE_RECIPE';
export const CLEAR_FAVOURITE = 'CLEAR_FAVOURITE';


// ACTION CREATORS
export function setRecipes(items) {
    return {
        type: SET_RECIPES,
        items
    }
}

export function favouriteRecipe(recipe) {
    return {
        type: FAVOURITE_RECIPE,
        recipe
    }
}

export function unfavouriteRecipe(recipe) {
    return {
        type: UNFAVOURITE_RECIPE,
        recipe
    }
}

export function clearFavourite() {
    return {
        type: CLEAR_FAVOURITE
    }
}
