import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';

import { connect } from 'react-redux';
import { setRecipes } from "../actions";

class SearchRecipes extends Component {

    constructor(){
        super();

        this.state = {
            ingredients : '',
            dish: ''
        }
    }

    search() {
        let { ingredients, dish } = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;

        axios
            .get(url)
            .then(res => {
                this.props.setRecipes(res.data.results)
            });

    }

    render() {
        return (
            <Form inline>
                <FormGroup>
                    <ControlLabel> Ingredients </ControlLabel>
                    {' '}
                    <FormControl value="garlic, chicken" onChange={event => this.setState({ ingredients: event.target.value })} type="text" placeholder="garlic, chicken"/>
                </FormGroup>

                {' '}

                <FormGroup>
                    <ControlLabel> Dish </ControlLabel>
                    {' '}
                    <FormControl value="adobo" onChange={event => this.setState({ dish: event.target.value })} type="text" placeholder="adobo"/>
                </FormGroup>

                {' '}

                <Button onClick={() => this.search()}> Submit </Button>
            </Form>
        )
    }
}

export default connect(null, { setRecipes })(SearchRecipes);
