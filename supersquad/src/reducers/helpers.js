import charactersJSON from "../data/characters";

export function createCharacter(id) {
    let character = charactersJSON.find(c => c.id === id);
    return character;
}
