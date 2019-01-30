import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMeme } from "../actions";
import '../index.css';

class MemeItem extends Component {

    constructor(){
        super();

        this.state = {
            hovered: false
        }
    }

    postMeme() {
        console.log(this.props);
        const { text0, text1 } = this.props;

        const meme = {
            template_id: this.props.meme.id,
            text0,
            text1
        };

        this.props.createMeme(meme);
    }

    render() {
        return(
            <div
                onMouseEnter={() => this.setState({ hovered: true })}
                onMouseLeave={() => this.setState({ hovered: false })}
                onClick={() => this.postMeme()}
                className="meme-item">
                <img
                    src={this.props.meme.url}
                    alt={this.props.meme.name}
                    className={ this.state.hovered ? "meme-img darken-img" : "meme-img" }
                />
                <p className={ this.state.hovered ? "meme-text" : "no-text" }>
                    {this.props.meme.name}
                </p>
            </div>
        )
    }
}

export default connect(null, { createMeme })(MemeItem);
