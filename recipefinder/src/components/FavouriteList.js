import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RecipeItem from './RecipeItem';

import { clearFavourite } from "../actions";

class FavouriteList extends Component {
    render() {
        return (
            <div>
                <h4 className="link">
                    <Link to='/'> Home </Link>
                </h4>

                <div onClick={() => this.props.clearFavourite()}>
                    <p> Clear All </p>
                </div>

                <h3> Favourites </h3>
                {
                    this.props.favouriteRecipes.map((recipe, index) => {
                        return (
                            <RecipeItem key={index} recipe={recipe} favourite/>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        favouriteRecipes: state.favouriteRecipes
    };
}

export default connect(mapStateToProps, { clearFavourite })(FavouriteList)
