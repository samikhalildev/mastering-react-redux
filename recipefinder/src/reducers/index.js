import { combineReducers } from 'redux';

import { SET_RECIPES, FAVOURITE_RECIPE, UNFAVOURITE_RECIPE, CLEAR_FAVOURITE } from "../actions";


function recipes(state = [], action) {

    switch (action.type) {
        case SET_RECIPES:
            return action.items;

        default:
            return state;
    }
}

function favouriteRecipes(state = [], action) {

    switch (action.type) {
        case FAVOURITE_RECIPE:
            state = [...state, action.recipe];
            return state;

        case UNFAVOURITE_RECIPE:
            state = state.filter(favourite => favourite.title !== action.recipe.title);
            return state;

        case CLEAR_FAVOURITE:
            state = [];
            return state;

        default:
            return state;

    }
}

const rootReducer = combineReducers({
    recipes,
    favouriteRecipes
});

export default rootReducer;
