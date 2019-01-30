import charactersJSON from '../data/characters';

// Import types
import { ADD_CHARACTER, REMOVE_CHARACTER, CLEAR_ALL_HEROES } from "../actions";
import { createCharacter } from "./helpers";

/*
    Reducer are functions with 2 parameters: default state and action

    In our reducer we have switch statements, depending on the action passed in,
    We will return a different representivation of the state
*/

function characters(state = charactersJSON, action) {
    switch (action.type) {

        case ADD_CHARACTER:
            let characters = state.filter(item => item.id !== action.id);
            return characters;

        case REMOVE_CHARACTER:
            characters = [...state, createCharacter(action.id)];
            return characters;

        case CLEAR_ALL_HEROES:
            characters = charactersJSON;
            return characters;

        default:
            return state;
    }
}

export default characters;
