
// React is the library used for all react code such as components
import React, { Component } from 'react';

// Import components
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';

// CSS
import '../styles/index.css';

class App extends Component {
    render() {
        return (

            <div className="App container">
                <h2> SuperSquad </h2>
                <div className="row">
                    <div className="col-md-4">
                        <CharacterList/>
                    </div>
                    <div className="col-md-4">
                        <HeroList/>
                    </div>
                    <div className="col-md-4">
                        <SquadStats/>
                    </div>
                </div>
            </div>

        )
    }
}

export default App;


