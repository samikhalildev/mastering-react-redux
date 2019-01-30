import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.css';
import MemeItem from './MemeItem';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import MyMemes from './MyMemes';

class App extends Component {

    constructor(){
        super();

        this.state = {
            memeLimit: 10,
            text0: '',
            text1: ''
        }
    }

    render() {
        return(
            <div>
                <h2> Meme Generator </h2>
                <MyMemes/>
                <h4> <i> Write Some Text </i> </h4>
                <div className="center">
                    <Form inline>
                        <FormGroup>
                            <ControlLabel> Top </ControlLabel>
                            {' '}
                            <FormControl onChange={event => this.setState({ text0: event.target.value })} type="text"/>
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel> Bottom </ControlLabel>
                            {' '}
                            <FormControl onChange={event => this.setState({ text1: event.target.value })} type="text"/>
                        </FormGroup>

                    </Form>
                </div>
                {
                    this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
                        return (
                            <MemeItem
                                key={index}
                                meme={meme}
                                text0={this.state.text0}
                                text1={this.state.text1}
                            />
                        )
                    })
                }
                <div className="meme-button" onClick={() => { this.setState({ memeLimit: this.state.memeLimit + 10 })}}> Load more... </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {})(App);
