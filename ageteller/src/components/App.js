import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './Style.css';

// Import components
import AgeStats from './AgeStats';

// Defining a custom component/class
class App extends Component {

    constructor(){
        super();

        this.state = {
            date: '',
            birthday: '1996-05-30',
            showStats: false
        }
    }

    submitBirthday(){
        console.log(this.state);
        this.setState({ birthday: this.state.date, showStats: true });
    }



    render() {
        return (
            <div className="App">
                <h2> Input Your Birthday! </h2>
                <Form inline>
                    <FormControl type="date" onChange={ event => this.setState({ date: event.target.value })}/>
                    {' '}
                    <Button onClick={() => this.submitBirthday()}> Submit </Button>
                    { this.state.showStats ?
                        <div className="fade age-stats">
                            <AgeStats date={this.state.date}/>
                        </div>
                        : <div></div>}
                </Form>
            </div>
        )
    }
}

export default App;
