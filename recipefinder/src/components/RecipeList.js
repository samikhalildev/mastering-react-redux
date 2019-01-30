import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RecipeItem from './RecipeItem';

class RecipeList extends Component {
    render() {

        const favLink = (
            <h4 className="link">
                <Link to='/favourites'> Favourites </Link>
            </h4>
        );

        return (
            <div>
                {
                    this.props.favouriteRecipes.length > 0 ? favLink : null
                }

                {
                    this.props.recipes.map((recipe, index) => {
                        return (
                            <RecipeItem
                                key={index}
                                recipe={recipe}
                                favouriteButton={true}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {})(RecipeList)
