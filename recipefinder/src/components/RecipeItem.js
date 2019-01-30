import React, { Component } from 'react';

import { connect } from 'react-redux';

// actions
import { favouriteRecipe, unfavouriteRecipe } from "../actions";

class RecipeItem extends Component {

    constructor() {
        super();

        this.state = {
            favourited: false
        }
    }

    componentDidMount() {
        if(this.props.favourite)
            this.setState({ favourited: true });
    }

    favourite(recipe) {
        if(this.state.favourited){
            this.setState({ favourited: false });
            this.props.unfavouriteRecipe(recipe);

        } else {
            this.setState({ favourited: true });
            this.props.favouriteRecipe(recipe);
        }
    }

    render() {

        let { recipe } = this.props;
        console.log(this.props.favourite);

        const favourited = (
            <div className="star" onClick={() => this.favourite(recipe)}>
                &#9733;
            </div>
        );

        const notFavourited = (
            <div className="star" onClick={() => this.favourite(recipe)}>
                &#9734;
            </div>
        );

        return (
            <div className="recipe-item">
                {
                    this.state.favourited ? favourited : notFavourited
                }

                <div className="recipe-text">
                    <a href={recipe.href}>
                        <h4> {recipe.title} </h4>
                    </a>
                    <p>{recipe.ingredients}</p>
                </div>

                <img
                    className="recipe-img"
                    src={recipe.thumbnail}
                    alt={recipe.title}
                />
            </div>
        )
    }
}


export default connect(null, { favouriteRecipe, unfavouriteRecipe })(RecipeItem);
