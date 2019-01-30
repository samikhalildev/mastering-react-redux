import React, { Component } from 'react';

// Redux modules
import { connect } from 'react-redux';

// Actions
import { addCharacterById } from "../actions";

class CharacterList extends Component {

    render() {

        return (
            <div>
                <h4>Characters</h4>
                <ul className="list-group">
                    {
                        this.props.characters.map(character => {
                            return (
                                <li className="list-group-item" key={character.id}>
                                    <div className="list-item"> {character.name} </div>
                                    <div className="list-item right-button" onClick={() => this.props.addCharacterById(character.id)}>+</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        characters: state.characters
    };
}

export default connect(mapStateToProps, { addCharacterById })(CharacterList);
