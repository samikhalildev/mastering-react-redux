/*
    Actions activate certain parts of our reducers, which then updates our store
    - All actions must have a type so that the reducer knows how to respond to actions
 */

// Declaring Types:
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';
export const CLEAR_ALL_HEROES = 'CLEAR_ALL_HEROES';


// Actions are a set of functions that returns an object 'action' contains type and data

/*
    This function will remove the character from the array and add it to my charactersReducer
 */
export function addCharacterById(id) {
    const action = {
        type: ADD_CHARACTER,
        id
    }

    return action;
}


export function removeCharacterById(id) {
    const action = {
        type: REMOVE_CHARACTER,
        id
    }

    return action;
}


export function clearAllHeroes() {
    const action = {
        type: CLEAR_ALL_HEROES
    }

    return action;
}
