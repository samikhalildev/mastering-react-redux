import React, { Component } from 'react';

// Redux modules
import { connect } from 'react-redux';

// Actions
import { removeCharacterById, clearAllHeroes } from "../actions";

class HeroList extends Component {

    render() {

        let clearAll = (
            <p className="right-button" onClick={() => this.props.clearAllHeroes()}> Clear All </p>
        );

        return (
            <div>
                <h4>Your Hero Squad</h4>
                <ul className="list-group">
                    {
                        this.props.heroes.map(hero => {
                            return (
                                <li className="list-group-item" key={hero.id}>
                                    <div className="list-item"> {hero.name} </div>
                                    <div className="list-item right-button" onClick={() => this.props.removeCharacterById(hero.id)}> x </div>
                                </li>
                            )
                        })
                    }
                </ul>

                {this.props.heroes.length > 0 ? clearAll : null}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        heroes: state.heroes
    };
}

export default connect(mapStateToProps, { removeCharacterById, clearAllHeroes })(HeroList);
