import { createCharacter } from "./helpers";

// Import types
import { ADD_CHARACTER, REMOVE_CHARACTER, CLEAR_ALL_HEROES } from "../actions";

/*
    Reducer are functions with 2 parameters: default state and action

    In our reducer we have switch statements, depending on the action passed in,
    We will return a different representivation of the state
*/

function heroes(state = [], action) {
    switch (action.type) {

        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.id)];
            return heroes;

        case REMOVE_CHARACTER:
            heroes = state.filter(item => item.id !== action.id);
            return heroes;

        case CLEAR_ALL_HEROES:
            heroes = [];
            return heroes;

        default:
            return state;

    }
}

export default heroes;
