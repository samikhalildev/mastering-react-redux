
/*
    This file will be the root of our reducers.
 */

import { combineReducers } from 'redux';
import characters from './charactersReducer';
import heroes from './heroesReducer';


// Combine all reducers here:
const rootReducer = combineReducers({
    characters,
    heroes
});

export default rootReducer;
